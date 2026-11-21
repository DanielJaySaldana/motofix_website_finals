"""Serve the exported MotoFix presentation. Uses Python's standard library."""
import http.server
import os
import pathlib
import webbrowser

os.chdir(pathlib.Path(__file__).parent / "website")
HAS_SYSTEM = pathlib.Path("system/index.html").exists()


class Handler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        route = self.path.split("?")[0]
        if route == "/" or route == "/index.html":
            self.path = "/promotional/index.html"
        elif HAS_SYSTEM and route.split("/")[1] in ("preview", "rider", "shop", "mechanic"):
            self.path = "/system/index.html"
        super().do_GET()


print("MotoFix presentation: http://localhost:8080")
print("Press Ctrl+C to stop.")
webbrowser.open("http://localhost:8080")
http.server.ThreadingHTTPServer(("127.0.0.1", 8080), Handler).serve_forever()
