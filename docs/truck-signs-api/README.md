---
sidebar_position: 6
---

# Signs for Trucks

An online store to buy pre-designed vinyls with custom lines of letters (truck letterings). Clients can upload their own designs and customize them on the website.

## Tech Stack

- Python 3.8.10
- Django 2.2.8
- Django REST Framework 3.12.4
- PostgreSQL
- Docker

## Description

The store allows clients to:
- Purchase pre-designed truck vinyls with custom lettering
- Upload their own designs and customize them
- Purchase simple lettering vinyls, fire extinguisher vinyls, or unit number vinyls

## Installation

1. Clone the repo:
```bash
git clone https://github.com/CloudStar2077/truck_signs_api
```

2. Configure a virtual environment and set up the database.

3. Configure the environment variables:
```bash
cd truck_signs_designs/settings
cp simple_env_config.env .env
```

4. Required environment variables:
```bash
SECRET_KEY
DB_NAME
DB_USER
DB_PASSWORD
DB_HOST
DB_PORT
```

5. Default database configuration:
```bash
DB_NAME=trucksigns_db
DB_USER=trucksigns_user
DB_PASSWORD=supertrucksignsuser!
DB_HOST=localhost
DB_PORT=5432
```

6. Run migrations and start the app:
```bash
python manage.py migrate
python manage.py runserver
```

The app runs on [localhost:8000](http://localhost:8000).

## Screenshots

### Mobile View

<a href="https://raw.githubusercontent.com/CloudStar2077/truck_signs_api/main/screenshots/Admin_Panel_View_Mobile.png" target="_blank">
  <img src="https://raw.githubusercontent.com/CloudStar2077/truck_signs_api/main/screenshots/Admin_Panel_View_Mobile.png" alt="Admin Panel Mobile" />
</a>

### Desktop View

<a href="https://raw.githubusercontent.com/CloudStar2077/truck_signs_api/main/screenshots/Admin_Panel_View.png" target="_blank">
  <img src="https://raw.githubusercontent.com/CloudStar2077/truck_signs_api/main/screenshots/Admin_Panel_View.png" alt="Admin Panel Desktop" />
</a>

## Useful Links

- [Django Official Documentation](https://docs.djangoproject.com/en/4.0/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Docker Official Documentation](https://docs.docker.com/)

