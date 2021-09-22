from rest_framework import serializers

from user.models import User
from review.models import Review


class NestedOwnerSerializer(serializers.ModelSerializer):

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
            "profile_pic"
        ]


class NestedReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
