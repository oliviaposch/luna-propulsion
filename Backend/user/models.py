from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.db import models


class User(AbstractUser):
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username']

    username = models.CharField(max_length=40, unique=True)
    first_name = models.CharField(max_length=20, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=100, blank=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$',
                                 message="Phone number must be entered in "
                                         "the format: '+999999999'. Up to 15 "
                                         "digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17,
                                    blank=True)
    things_user_loves = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=300, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    profile_pic = models.ImageField(blank=True, null=True)
