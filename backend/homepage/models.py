from django.db import models



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