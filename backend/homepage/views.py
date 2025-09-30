from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import ProductAdvantage
from .models import Description
from .serializers import ProductAdvantageSerializer
from .serializers import DescriptionSerializer


class DescriptionViewSet(ModelViewSet):
    queryset = Description.objects.all()
    serializer_class = DescriptionSerializer
    
class ProductAdvantageViewSet(ModelViewSet):
    queryset = ProductAdvantage.objects.all()
    serializer_class = ProductAdvantageSerializer
# Create your views here.
