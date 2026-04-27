@echo off
echo Installing SuccessHR dependencies...
echo.

echo [1/2] Installing backend...
cd /d "%~dp0backend"
call npm install
echo Backend done.
echo.

echo [2/2] Installing frontend...
cd /d "%~dp0frontend"
call npm install
echo Frontend done.
echo.

echo ========================================
echo Installation complete!
echo Run start.bat to launch the application.
echo ========================================
pause
