import os
from typing import TypedDict, List

from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_core.prompts import ChatPromptTemplate
from langgraph.graph import StateGraph, END


# Load environment variables (expects GEMINI_API_KEY and TAVILY_API_KEY)
load_dotenv()


class QAState(TypedDict):
    """State for the sequential LangGraph.

    - question: user query
    - search_results: web search snippets from Tavily
    - answer: final LLM answer
    """

    question: str
    search_results: List[str]
    answer: str


def _get_gemini_model() -> ChatGoogleGenerativeAI:
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise RuntimeError("GEMINI_API_KEY is not set in the environment")

    return ChatGoogleGenerativeAI(
        model="gemini-2.5-flash",
        temperature=0.3,
        api_key=api_key,
    )


def web_search_node(state: QAState) -> QAState:
    """Use Tavily to search the web for the question."""

    tavily_api_key = os.getenv("TAVILY_API_KEY")
    if not tavily_api_key:
        raise RuntimeError("TAVILY_API_KEY is not set in the environment")

    tool = TavilySearchResults(max_results=5)
    results = tool.invoke({"query": state["question"]})

    snippets: List[str] = []
    for item in results:
        # each item typically has keys like 'url', 'content'
        content = item.get("content") or item.get("snippet") or ""
        if content:
            snippets.append(content)

    return {
        **state,
        "search_results": snippets,
    }


def answer_node(state: QAState) -> QAState:
    """Use Gemini to synthesize an answer from the search results and question."""

    model = _get_gemini_model()

    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                """You are an AI assistant that answers questions using given web search results.\n\nFollow these rules:\n- Base your answer primarily on the provided search results.\n- If the answer is uncertain, say so explicitly.\n- Be concise and helpful.\n""",
            ),
            (
                "human",
                """Question: {question}\n\nWeb search results (may be truncated):\n{search_results}\n\nDraft a clear, concise answer for the user. If information is missing or conflicting, explain the uncertainty.""",
            ),
        ]
    )

    joined_results = "\n\n".join(state.get("search_results", []))

    chain = prompt | model
    response = chain.invoke(
        {
            "question": state["question"],
            "search_results": joined_results,
        }
    )

    # ChatGoogleGenerativeAI returns a Message-like object; get the text
    answer_text = getattr(response, "content", None) or str(response)

    return {
        **state,
        "answer": answer_text,
    }


def build_qa_graph():
    """Build and return the sequential LangGraph for Q&A over web search."""

    workflow = StateGraph(QAState)

    # Add nodes
    workflow.add_node("web_search", web_search_node)
    workflow.add_node("answer", answer_node)

    # Set entry point and edges: question -> web_search -> answer -> END
    workflow.set_entry_point("web_search")
    workflow.add_edge("web_search", "answer")
    workflow.add_edge("answer", END)

    return workflow.compile()


def run_qa(question: str) -> str:
    """Convenience function: run the graph once for a given question.

    Usage (from Python):
        from services.Langraph_reactflow.test_langgraph import run_qa
        print(run_qa("What is LangGraph and how does it work?"))
    """

    graph = build_qa_graph()

    initial_state: QAState = {
        "question": question,
        "search_results": [],
        "answer": "",
    }

    final_state = graph.invoke(initial_state)
    return final_state["answer"]


if __name__ == "__main__":
    q = input("Enter your question: ")
    ans = run_qa(q)
    print("\n=== Answer ===\n")
    print(ans)
