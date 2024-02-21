from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random as rand
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


cache = 0
@app.get("/")
def read_root():
    return {"Hello": "World"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}
@app.get("/cache/rottery")
def get_rottery():
    rottery = rand.randint(0, 100)
    return {"result": rottery}
@app.post("/cache")
def set_cache(result: int):
    global cache
    cache = result
    return {"result": result}
@app.get("/cache")
def get_cache():
    return {"result": cache}