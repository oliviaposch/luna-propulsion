from django.urls import path
from .views import ListCreateRestaurant, RetrieveUpdateDeleteRestaurant, ListRestaurantsByOwner, ListRestaurantsByCategory

urlpatterns = [
    path('restaurants/',ListCreateRestaurant.as_view()),
    path('restaurants/<int:id>/',RetrieveUpdateDeleteRestaurant.as_view()),
    path('restaurants/user/<int:user_id>/',ListRestaurantsByOwner.as_view()),
    path('restaurants/category/<str:category>/',ListRestaurantsByCategory.as_view())
]