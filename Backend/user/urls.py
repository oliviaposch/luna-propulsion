from django.urls import path

from user.views import UserList, RetrieveUpdateDestroyMyUserView, RetrieveUserView

urlpatterns = [
    path('users/list/', UserList.as_view()),
    path('me/', RetrieveUpdateDestroyMyUserView.as_view()),
    path('users/<int:pk>/', RetrieveUserView.as_view()),
    path('users/<str:search>', UserList.as_view()),
]
