from rest_framework.routers import DefaultRouter
from .views import PremiumPlatesViewSet, StandardPlatesViewSet, EuroPlatesViewSet



router = DefaultRouter()
router.register(r'premium-plates', PremiumPlatesViewSet, basename='premium-plates')
router.register(r'standard-plates', StandardPlatesViewSet, basename='standard-plates')
router.register(r'euro-plates', EuroPlatesViewSet, basename='euro-plates')

urlpatterns = router.urls