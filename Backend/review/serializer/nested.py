from rest_framework import serializers

from user.models import User
from restaurant.models import Restaurant


class NestedAuthorSerializer(serializers.ModelSerializer):
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
        ]


class NestedRestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
