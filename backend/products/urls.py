from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, AboutViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')
router.register(r'about', AboutViewSet, basename='about')

urlpatterns = router.urls