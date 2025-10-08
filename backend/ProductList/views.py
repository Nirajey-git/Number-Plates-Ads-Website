from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import PremiumPlates, StandardPlates, EuroPlates
from .serializers import PremiumPlatesSerializer, StandardPlatesSerializer, EuroPlatesSerializer


class PremiumPlatesViewSet(ModelViewSet):
    queryset = PremiumPlates.objects.all()
    serializer_class = PremiumPlatesSerializer

# Create your views here.
class StandardPlatesViewSet(ModelViewSet):
    queryset = StandardPlates.objects.all()
    serializer_class = StandardPlatesSerializer
    
class EuroPlatesViewSet(ModelViewSet):
    queryset = EuroPlates.objects.all()
    serializer_class = EuroPlatesSerializer