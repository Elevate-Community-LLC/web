"""Serve static files in this directory."""

from fastapi import FastAPI, Response
from fastapi.staticfiles import StaticFiles

app = FastAPI()

class NoCacheStaticFiles(StaticFiles):
    def file_response(self, *args, **kwargs) -> Response:
        response = super().file_response(*args, **kwargs)
        # Set headers to explicitly disable caching
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, max-age=0"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
        return response

app.mount(
    path="/",
    app=NoCacheStaticFiles(
        directory="./src/static/",
        html=True,
    ),
)
