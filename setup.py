"""
Run ONCE to set up the project:
  python setup.py
Then every time to start the server:
  python manage.py runserver
"""
import os, django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from django.core.management import call_command
from django.contrib.auth import get_user_model

print("==> Running migrations...")
call_command('makemigrations', 'api')
call_command('migrate')

print("==> Loading 4 categories + 20 products...")
call_command('loaddata', 'initial_data')

print("==> Creating superuser  admin / admin1234 ...")
User = get_user_model()
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@shop.com', 'admin1234')
    print("    Created: admin / admin1234")
else:
    print("    Already exists.")

print()
print("=" * 50)
print("  Setup complete!")
print("  Start server:  python manage.py runserver")
print("  Admin panel:   http://127.0.0.1:8000/admin/")
print("  API root:      http://127.0.0.1:8000/api/")
print("  DRF browser:   http://127.0.0.1:8000/api/categories/")
print("=" * 50)
