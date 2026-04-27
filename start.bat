@echo off
echo Starting SuccessHR...
echo.
echo Backend: http://localhost:5019
echo Frontend: http://localhost:5174
echo.

start "SuccessHR Backend" cmd /k "cd /d "%~dp0backend" && npm start"
timeout /t 2 /nobreak >nul
start "SuccessHR Frontend" cmd /k "cd /d "%~dp0frontend" && npm run dev"

echo Servers started. Opening browser...
timeout /t 3 /nobreak >nul
start http://localhost:5174
