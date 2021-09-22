from rest_framework import serializers

from review.models import Review
from review.serializer.nested import NestedAuthorSerializer, NestedRestaurantSerializer


class ReviewSerializer(serializers.ModelSerializer):
    author = NestedAuthorSerializer(read_only=True)
    likes = NestedAuthorSerializer(many=True, read_only=True)
    restaurant = NestedRestaurantSerializer(read_only=True)

    class Meta:
        model = Review
        fields = '__all__'
