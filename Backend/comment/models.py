from django.contrib.auth import get_user_model
from django.db import models
from review.models import Review


User = get_user_model()

class Comment(models.Model):

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(to=User, related_name="authored_comments", on_delete=models.CASCADE, blank=True, null=True)
    review = models.ForeignKey(to=Review,related_name="related_comments",on_delete=models.CASCADE)
    text = models.CharField(max_length=300)
    likes = models.ManyToManyField(to=User,related_name="liked_comments",blank=True)