from rest_framework.routers import DefaultRouter
from .views import ProductAdvantageViewSet
from .views import DescriptionViewSet

router = DefaultRouter()
router.register(r'productAdvantage', ProductAdvantageViewSet, basename='productAdvantage')
router.register(r'description', DescriptionViewSet, basename='description')

urlpatterns = router.urls