from rest_framework import serializers

from user.models import User
from user.serializers.nested import NestedRestaurantSerializer, NestedReviewSerializer


class ListUserSerializer(serializers.ModelSerializer):
    owned_restaurants = NestedRestaurantSerializer(many=True)
    authored_reviews = NestedReviewSerializer(many=True)
    liked_reviews = NestedReviewSerializer(many=True)

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "location",
            "phone_number",
            "things_user_loves",
            "description",
            "date_joined",
            "profile_pic",
            "owned_restaurants",
            "authored_reviews",
            "liked_reviews",
        ]

