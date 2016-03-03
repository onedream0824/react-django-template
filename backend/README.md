# Django Application Server

## Primary Modules
1. [django](https://www.djangoproject.com/)
1. [django rest framework](http://www.django-rest-framework.org/)
1. [custom user](https://github.com/jcugat/django-custom-user)

## Prerequisites
1. Postgres
1. Python

## Installation
1. `pip install -r backend/requirements/devl.pip`
1. `createdb {{ project_name }}`
1. `python manage.py migrate`
1. Load some test data: `python manage.py loadtestdata users.EmailUser:100`
1. Create your account: `python manage.py createsuperuser`
1. Update the `last_name` and `first_name` of your super user in the database.
1. `python manage.py runserver`
