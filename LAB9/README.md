# Lab 9 — shop-back (Django REST Framework)

Full CRUD REST API using DRF ViewSets and DefaultRouter.

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
| GET | /api/categories/ | All categories |
| GET | /api/categories/1/ | Category by ID |
| GET | /api/categories/1/products/ | Products in category |
| POST | /api/categories/ | Create category |
| PUT | /api/categories/1/ | Update category |
| DELETE | /api/categories/1/ | Delete category |
| GET | /api/products/ | All products |
| GET | /api/products/1/ | Product by ID |
| POST | /api/products/ | Create product |
| PUT | /api/products/1/ | Update product |
| DELETE | /api/products/1/ | Delete product |

## Admin
- URL: http://127.0.0.1:8000/admin/
- Login: admin / admin1234

## Postman
Import `OnlineShopAPI.postman_collection.json` to get all 11 requests ready.
