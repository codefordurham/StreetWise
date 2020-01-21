Overview
========

Architectural Haiku:

___Know___ _when, who to call_
___Give___ _#s and times for homes_
___Build___ _a contact sheet_

Stakeholders:

* Product Owner: we hope to partner with a Durham city department.
* Users: residents and business owners in Durham.

Guideposts:

* resource constraints:
    * developed by volunteers, in their free time!
    * there is no budget -- free/cheap resources are best!

Vocabulary:
* "Service" is a geographically located offering such as a city provided
   service (ie, trash pick up), or utility, or park.

This is a Django project "Code for Durham" is working on that will be similar
to the LA Neighborhood Info site: http://neighborhoodinfo.lacity.org/

Software
--------

This project is composed of a Django/python backend, and a React frontend.

Local Development
-----------------

In local development two servers are needed to develop for the full app:
 * The backend django server, that serves to the API.
 * React server, that automatically assembles any changes to the javascript frontend. The [React Scripts](https://create-react-app.dev/docs/folder-structure) project is used.

Below are the steps I took to set up the Django project on my local machine
(windows). Note, the Django security key is missing from the settings.py file.
Please contact ssciere if you need this.

***STEPS TO CREATE DJANGO PROJECT LOCALLY ON WINDOWS MACHINE (and launch in VS Code)***

      python --version
      Python 3.7.2

      pip3 install pipenv
      pipenv install -r requirements.txt
      pipenv shell

      # Set up the initial developer settings if you haven't already done so:
      cp streetwise/devsettings.template.py streetwise/devsettings.py

      # Run the Django backend server on http://localhost:8000
      export DJANGO_SETTINGS_MODULE=streetwise.devsettings
      python manage.py runserver

Visit http://localhost:8000/qpa/ to work directly against a server side path -
http://localhost:8000 serves the react interface (whatever was most recently
built with `python manage.py collectstatic`), and should generally be avoided
for local development.

In another console, run the react scripts for local development:

      # Optionally use NVM to use the version of node used by this project:
      nvm use

      # Run the frontend React server on http://localhost:
      yarn install
      yarn run start

Visit http://localhost:3000 to work directly with the React interface.

Local Docker Development
-------------------------

To run the servers locally with docker:

    # Set up the initial developer settings if you haven't already done so:
    cp streetwise/devsettings.template.py streetwise/devsettings.py

    docker-compose up

Then visit http://localhost:8000
