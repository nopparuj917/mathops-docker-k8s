from typing import Union
from fastapi import FastAPI
import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "*", # Allow all origins
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}

@app.get("/calculate")
def calculate(num1: int, num2: int, operation: str):
    result = 0
    if operation == "add":
        result = num1 + num2
    elif operation == "subtract":
        result = num1 - num2
    elif operation == "multiply":
        result = num1 * num2
    elif operation == "divide":
        result = num1 / num2
    else:
        return "Invalid operation"
    # cache = requests.post(f"http://cache:8002/cache?result={result}")
    is_palindrome = requests.get(f"http://192.168.0.107:31452/notification?result={result}")
    return {"result": result, "display_image": is_palindrome.json()}