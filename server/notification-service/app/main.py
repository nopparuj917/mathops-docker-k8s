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


@app.get("/notification")
def noti(result: int):
    is_palindome_result = is_palindome(str(result))
    is_prime_result = is_prime(result)
    return {"is_palindome": is_palindome_result, "is_prime": is_prime_result}

def is_palindome(word: str):
    return word == word[::-1]
def is_prime(num: int):
    for i in range(2, num):
        if num % i == 0:
            return False
    return True