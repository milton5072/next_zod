import random
import time
import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
def generate_unique_id():
    return int(time.time() * 1) + random.randint(0, 999)


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    unique_id = models.BigIntegerField(default=generate_unique_id, unique=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)

    def __str__(self):
        return self.email
