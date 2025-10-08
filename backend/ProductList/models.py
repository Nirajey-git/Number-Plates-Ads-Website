from django.db import models

# Create your models here.
class PremiumPlates(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='premium/')
    
    def __str__(self):
        return self.name
    
class StandardPlates(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='standard/')
    
    def __str__(self):
        return self.name
    
class EuroPlates(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='euro/')
    
    def __str__(self):
        return self.name