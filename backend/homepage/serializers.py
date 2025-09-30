from rest_framework import serializers
from .models import ProductAdvantage
from .models import Description


class DescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Description
        fields = '__all__'
        
class ProductAdvantageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductAdvantage
        fields = '__all__'