# streetwise

This is a Django project "Code for Durham" is working on that will be similar to the LA Neighborhood Info site: http://neighborhoodinfo.lacity.org/

Below are the steps I took to set up the Django project on my local machine (windows). Note, the Django security key is missing from the 
settings.py file.  Please contact ssciere if you need this.

****STEPS TO CREATE DJANGO PROJECT LOCALLY ON WINDOWS MACHINE (and launch in VS Code)****************


note: I'm using Python 3.7.2
(streetwise-3GpLyePt) C:\Users\Steve\code_for_durham\streetwise>python --version
Python 3.7.2


C:\Users\Steve\code_for_durham\streetwise>pip3 install pipenv
Requirement already satisfied: pipenv in c:\users\steve\appdata\local\programs\python\python37\lib\site-packages (2018.11.26)
Requirement already satisfied: setuptools>=36.2.1 in c:\users\steve\appdata\local\programs\python\python37\lib\site-packages (from pipenv) (40.6.2)
Requirement already satisfied: certifi in c:\users\steve\appdata\local\programs\python\python37\lib\site-packages (from pipenv) (2019.3.9)
Requirement already satisfied: virtualenv-clone>=0.2.5 in c:\users\steve\appdata\local\programs\python\python37\lib\site-packages (from pipenv) (0.5.3)
Requirement already satisfied: virtualenv in c:\users\steve\appdata\local\programs\python\python37\lib\site-packages (from pipenv) (16.5.0)
Requirement already satisfied: pip>=9.0.1 in c:\users\steve\appdata\local\programs\python\python37\lib\site-packages (from pipenv) (18.1)
You are using pip version 18.1, however version 19.1.1 is available.
You should consider upgrading via the 'python -m pip install --upgrade pip' command.

C:\Users\Steve\code_for_durham\streetwise>pipenv install django==2.1.9
Creating a virtualenv for this project…
Pipfile: C:\Users\Steve\code_for_durham\streetwise\Pipfile
Using c:\users\steve\appdata\local\programs\python\python37\python.exe (3.7.2) to create virtualenv…
[ ===] Creating virtual environment...Already using interpreter c:\users\steve\appdata\local\programs\python\python37\python.exe
Using base prefix 'c:\\users\\steve\\appdata\\local\\programs\\python\\python37'
New python executable in C:\Users\Steve\.virtualenvs\streetwise-3GpLyePt\Scripts\python.exe
Installing setuptools, pip, wheel...
done.

Successfully created virtual environment!
Virtualenv location: C:\Users\Steve\.virtualenvs\streetwise-3GpLyePt
Creating a Pipfile for this project…
Installing django==2.1…
Adding django to Pipfile's [packages]…
Installation Succeeded
Pipfile.lock not found, creating…
Locking [dev-packages] dependencies…
Locking [packages] dependencies…
Success!
Updated Pipfile.lock (30ae14)!
Installing dependencies from Pipfile.lock (30ae14)…
  ================================ 2/2 - 00:00:02
To activate this project's virtualenv, run pipenv shell.
Alternatively, run a command inside the virtualenv with pipenv run.

C:\Users\Steve\code_for_durham\streetwise>pipenv shell
Launching subshell in virtual environment…
Microsoft Windows [Version 10.0.17763.503]
(c) 2018 Microsoft Corporation. All rights reserved.

(streetwise-3GpLyePt) C:\Users\Steve\code_for_durham\streetwise>django-admin startproject streetwise .

(streetwise-3GpLyePt) C:\Users\Steve\code_for_durham\streetwise>python manage.py startapp query_processor_app

(streetwise-3GpLyePt) C:\Users\Steve\code_for_durham\streetwise>code .




