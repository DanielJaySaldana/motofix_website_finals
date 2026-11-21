@echo off
start "" "%~dp0..\..\..\xampp-control.exe"
timeout /t 2 /nobreak >nul
start "" "http://localhost/motofix_website_finals/"
