from django.contrib import admin
from .models import PremiumPlates
from .models import StandardPlates
from .models import EuroPlates


admin.site.register(PremiumPlates)
admin.site.register(StandardPlates)
admin.site.register(EuroPlates)

# Register your models here.
