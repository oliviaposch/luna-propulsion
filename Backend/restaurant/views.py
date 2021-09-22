from django.contrib.auth import get_user_model
from django.http import Http404
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import Restaurant
from .permissions import IsOwnerOrSuperuserOrReadOnly
from restaurant.serializers.serializers import RestaurantSerializer

User = get_user_model()


class ListCreateRestaurant(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(owner=request.user)
        return Response(serializer.data)


class RetrieveUpdateDeleteRestaurant(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    lookup_field = "id"
    permission_classes = [IsOwnerOrSuperuserOrReadOnly]

    def get(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
        except Http404:
            return Response(data={"error": "restaurant does not exist"}, status=404)

        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            instance.delete()
        except Http404:
            return Response(data={"error": "restaurant does not exist"}, status=404)
        return Response(data={"success": "restaurant has been deleted."}, status=200)


class ListRestaurantsByOwner(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get(self, request, *args, **kwargs):
        filtered_queryset = self.get_queryset().filter(owner=self.kwargs["user_id"]).order_by('created')
        # reverse() to invert order
        serializer = self.get_serializer(filtered_queryset, many=True)
        if serializer.data:
            return Response(serializer.data)
        else:
            return Response(data={"error": "no such restaurant owner"}, status=404)


class ListRestaurantsByCategory(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def get(self, request, *args, **kwargs):
        filtered_queryset = self.get_queryset().filter(category__icontains=self.kwargs["category"]).order_by('created')
        # reverse() to invert order
        serializer = self.get_serializer(filtered_queryset, many=True)
        if serializer.data:
            return Response(serializer.data)
        else:
            return Response(data={"error": "no restaurant found under this category"}, status=404)
