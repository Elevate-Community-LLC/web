"""Serve static files in this directory."""

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount(
    path="/",
    app=StaticFiles(
        directory="./src/static/",
        html=True,
    ),
)
