from .models import PremiumPlates, StandardPlates, EuroPlates
from rest_framework import serializers


class PremiumPlatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PremiumPlates
        fields = '__all__'
        

class StandardPlatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = StandardPlates
        fields = '__all__'
        
class EuroPlatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = EuroPlates
        fields = '__all__'