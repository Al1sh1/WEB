# Lab 8 — shop-back (Plain Django)

Django REST API with 5 endpoints, no extra libraries.

## Setup & Run (CMD)

```cmd
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python setup.py
python manage.py runserver
```

## Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/products/ | All products |
| GET | /api/products/1/ | Product by ID |
| GET | /api/categories/ | All categories |
| GET | /api/categories/1/ | Category by ID |
| GET | /api/categories/1/products/ | Products by category |

## Admin
- URL: http://127.0.0.1:8000/admin/
- Login: admin / admin1234
