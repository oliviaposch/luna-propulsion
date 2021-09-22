from django.urls import path
from .views import CreateRestaurantReviews, ListRestaurantReviews, ListUserReviews, RetrieveUpdateDeleteReview,\
    ToggleLikeReview, ListCurrentUserLikes, ListAllRestaurantReviews

urlpatterns = [
    path('reviews/new/<int:restaurant_id>/', CreateRestaurantReviews.as_view()),
    path('reviews/restaurant/<int:restaurant_id>/', ListRestaurantReviews.as_view()),
    path('reviews/', ListAllRestaurantReviews.as_view()),
    path('reviews/user/<int:user_id>/', ListUserReviews.as_view()),
    path('reviews/<int:review_id>/', RetrieveUpdateDeleteReview.as_view()),
    path('reviews/like/<int:review_id>/', ToggleLikeReview.as_view()),
    path('reviews/likes/', ListCurrentUserLikes.as_view())
]
