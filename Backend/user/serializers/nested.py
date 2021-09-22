from rest_framework import serializers

from review.models import Review
from restaurant.models import Restaurant


class NestedRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'


class NestedReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = '__all__'




