# Service logic for feedback handling

def process_feedback(name: str, message: str):
    name = (name or "").strip()
    message = (message or "").strip()

    if not name or not message:
        return {"error": "Name and message are required"}

    # Placeholder for persistence or further processing
    # e.g., save to DB, send email, etc.

    return {
        "message": f"Thanks {name}! Your feedback was received.",
        "length": len(message),
    }
