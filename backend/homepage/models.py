from django.db import models



class Brands(models.Model):
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='brands/')
    
    def __str__(self):
        return self.name

class Description(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    
    def __str__(self):
        return self.title # Return first 50 characters for easier identification
# Create your models here.
class ProductAdvantage(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='product_advantages/')
    
    
    def __str__(self):
        return self.title