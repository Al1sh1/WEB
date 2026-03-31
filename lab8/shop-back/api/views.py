from django.http import JsonResponse
from .models import Category, Product


def _product_dict(p):
    return {
        "id":          p.id,
        "name":        p.name,
        "price":       p.price,
        "description": p.description,
        "count":       p.count,
        "is_active":   p.is_active,
        "category":    p.category_id,
    }


def _category_dict(c):
    return {"id": c.id, "name": c.name}


# GET /api/products/
def product_list(request):
    products = Product.objects.all()
    return JsonResponse([_product_dict(p) for p in products], safe=False)


# GET /api/products/<id>/
def product_detail(request, id):
    try:
        return JsonResponse(_product_dict(Product.objects.get(pk=id)))
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)


# GET /api/categories/
def category_list(request):
    categories = Category.objects.all()
    return JsonResponse([_category_dict(c) for c in categories], safe=False)


# GET /api/categories/<id>/
def category_detail(request, id):
    try:
        return JsonResponse(_category_dict(Category.objects.get(pk=id)))
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)


# GET /api/categories/<id>/products/
def category_products(request, id):
    try:
        category = Category.objects.get(pk=id)
        products = Product.objects.filter(category=category)
        return JsonResponse([_product_dict(p) for p in products], safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)
