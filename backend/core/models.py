from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        if not email:
            raise ValueError('User must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password=None):
        user = self.create_user(
            email,
            password=password,
            name=name,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractUser):
    STARTUP = "SU"
    VENT_CAP = "VC"
    GUEST_USR = "G"
    USER_CHOICES = (
        (STARTUP, "Start-up"),
        (VENT_CAP, "Venture Captial"),
        (GUEST_USR, "Guest")
    )

    email = models.EmailField(verbose_name='Email', max_length=255, unique=True)
    user_type = models.CharField(max_length=2, choices=USER_CHOICES)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


