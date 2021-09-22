from django.core.validators import RegexValidator
from django.db import models

from django.contrib.auth import get_user_model

User = get_user_model()


# def restaurant_directory_path(instance, filename):
#     # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
#     return f'{instance.id}/{filename}'


class Restaurant(models.Model):

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    zip = models.CharField(max_length=5)
    website = models.CharField(max_length=200)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in "
                                         "the format: '+999999999'. Up to 15 "
                                         "digits allowed.")
    phone = models.CharField(validators=[phone_regex], max_length=17, blank=True)
    email = models.CharField(max_length=100)
    opening_hours = models.CharField(max_length=100)
    price_level = models.CharField(max_length=3)
    image = models.ImageField(blank=True, null=True)
    owner = models.ForeignKey(to=User, related_name="owned_restaurants", on_delete=models.CASCADE, blank=True, null=True)
