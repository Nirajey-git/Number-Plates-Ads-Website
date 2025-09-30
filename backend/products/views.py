from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Product
from .models import About
from .serializers import ProductSerializer
from .serializers import AboutSerializer

class AboutViewSet(ModelViewSet):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Create your views here.
