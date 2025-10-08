from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import ProductAdvantage
from .models import Description
from .serializers import ProductAdvantageSerializer
from .serializers import DescriptionSerializer
from .models import Brands
from .serializers import BrandsSerializer


class BrandsViewSet(ModelViewSet):
    queryset = Brands.objects.all()
    serializer_class = BrandsSerializer


class DescriptionViewSet(ModelViewSet):
    queryset = Description.objects.all()
    serializer_class = DescriptionSerializer
    
class ProductAdvantageViewSet(ModelViewSet):
    queryset = ProductAdvantage.objects.all()
    serializer_class = ProductAdvantageSerializer
# Create your views here.
