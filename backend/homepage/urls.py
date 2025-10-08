from rest_framework.routers import DefaultRouter
from .views import ProductAdvantageViewSet
from .views import DescriptionViewSet, BrandsViewSet

router = DefaultRouter()
router.register(r'productAdvantage', ProductAdvantageViewSet, basename='productAdvantage')
router.register(r'description', DescriptionViewSet, basename='description')
router.register(r'brands', BrandsViewSet, basename='brands')

urlpatterns = router.urls