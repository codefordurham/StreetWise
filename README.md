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

React Development
-----------------

To see all the react components, and test directly, you can use storybook:

    yarn storybook

To run react locally and see the complete app:

    yarn run start

Local Development
-----------------

Below are the steps I took to set up the Django project on my local machine
(windows). Note, the Django security key is missing from the settings.py file.
Please contact ssciere if you need this.

***STEPS TO CREATE DJANGO PROJECT LOCALLY ON WINDOWS MACHINE (and launch in VS Code)***

Note: I'm using Python 3.7.2

```
python --version

Python 3.7.2


pip3 install pipenv
pipenv install -r requirements.txt
pipenv shell

python manage.py startapp query_processor_app
```

Local Docker Development
-------------------------

To run this locally with docker:

    # Set up the initial developer settings if you haven't already done so:
    cp streetwise/devsettings.template.py streetwise/devsettings.py

    docker-compose up

Then visit http://localhost:8000
