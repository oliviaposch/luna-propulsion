from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView

# from project.permissions import IsOwnerOrReadOnly
from user.serializers.serializers import ListUserSerializer

User = get_user_model()


class UserList(ListAPIView):
    serializer_class = ListUserSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = User.objects.all()
        search = self.request.query_params.get('search')
        if search is not None:
            queryset = queryset.filter(Q(first_name__contains=search) | Q(last_name__contains=search))
        return queryset


class RetrieveUpdateDestroyMyUserView(RetrieveUpdateDestroyAPIView):
    serializer_class = ListUserSerializer
    # permission_classes = [IsOwnerOrReadOnly]

    def get_object(self):
        return self.request.user


class RetrieveUserView(RetrieveAPIView):
    queryset = User.objects.all()
    lookup_field = 'pk'
    serializer_class = ListUserSerializer
    # permission_classes = [IsAuthenticated]
