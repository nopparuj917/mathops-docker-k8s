## Getting Started

### [FastAPI Docs](https://fastapi.tiangolo.com/)

-   `pip install fastapi` to install FastAPI

-   You will also need an ASGI server, for production such as Uvicorn or Hypercorn.
    `pip install "uvicorn[standard]"` to install Uvicorn

-   `uvicorn app.main:app --reload` to run the server

### Alternative for getting stated

-   `pip install -r requirements.txt` to install all dependencies
-   `uvicorn app.main:app --proxy-headers --host 0.0.0.0 --port 80` to run the server

### Docker(deprecated)

-   `docker build -t service-simple .` to build the image
-   `docker run -d --name service-simple -p 80:80 service-simple` to run the container

### Docker compose
- `docker compose up -d` to run the container of 3 services

## Enter point
-   `http://localhost:8000/docs` to see the Swagger UI
-   `http://localhost:8000/redoc` to see the ReDoc UI
-   `http://localhost:8000/openapi.json` to see the OpenAPI schema

## Endpoint for using in frontend
### Calculation service
**GET** `localhost:8001/calculate?num1=1&num2=979&operation=multiply`
### Cache service
**GET** `localhost:8002/cache`
