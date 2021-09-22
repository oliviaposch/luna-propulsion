from django.contrib.auth import get_user_model
from django.db import models
from restaurant.models import Restaurant

User = get_user_model()


class Review(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    text = models.CharField(max_length=300)
    rating = models.IntegerField(
        choices=[(1, "very bad"), (2, "bad"), (3, "average"), (4, "good"), (5, "very good")],
        default=3
    )
    author = models.ForeignKey(to=User, related_name="authored_reviews", on_delete=models.CASCADE, blank=True, null=True)
    restaurant = models.ForeignKey(to=Restaurant, related_name="reviews", on_delete=models.CASCADE)
    likes = models.ManyToManyField(to=User, related_name="liked_reviews", blank=True)
