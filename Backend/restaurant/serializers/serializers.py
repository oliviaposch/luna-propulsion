from rest_framework import serializers

from restaurant.models import Restaurant
from restaurant.serializers.nested import NestedOwnerSerializer, NestedReviewSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    owner = NestedOwnerSerializer(read_only=True)
    reviews = NestedReviewSerializer(many=True, read_only=True)

    class Meta:
        model = Restaurant
        fields = '__all__'
