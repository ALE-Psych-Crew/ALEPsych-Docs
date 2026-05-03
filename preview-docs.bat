@echo off
setlocal

cd /d "%~dp0"

echo Starting ALE Psych Docs local preview...

where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm is not installed or not on PATH.
  echo Install Node.js first, then run this file again.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo ERROR: npm install failed.
    pause
    exit /b 1
  )
)

echo Launching DocMD dev server...
call npm run dev

endlocal
