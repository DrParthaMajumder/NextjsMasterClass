# 🌟 Handles the core logic of saving or processing quotes

def process_quote(author: str, quote: str):
    """
    Processes the received quote and returns a structured result.
    """
    if not quote.strip():
        return {"error": "Quote cannot be empty"}

    return {
        "message": "Quote received successfully!",
        "author": author,
        "length": len(quote),
    }