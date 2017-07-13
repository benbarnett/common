@echo off
setlocal

set PYTHON=%~1
if defined PYTHON set PATH=%PYTHON%;%PYTHON%\Scripts;%PATH%

::
:: cd to project root and install dev/test dependencies
::

set SCRIPTSDIR=%~dp0
pushd "%SCRIPTSDIR%" && pushd ..

pip install -r requirements.txt
npm install -g markdownlint-cli

popd && popd
endlocal
