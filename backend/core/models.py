from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, name, user_type, password=None):
        if not email:
            raise ValueError('User must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            name=name,
            user_type=user_type
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name=None, user_type=None, password=None):
        user = self.create_user(
            email,
            password=password,
            name=name,
            user_type=user_type,
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

    username = None
    email = models.EmailField(verbose_name='Email', max_length=255, unique=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    user_type = models.CharField(max_length=2, choices=USER_CHOICES, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin


class StartupProfile(models.Model):
    INDUSTRY_CHOICES = (
        ("Agriculture","Agriculture"),
        ("Education","Education"),
        ("Finance", "Finance"),
        ("Health", "Health"),
        ("IT", "IT"),
    )

    PRODUCT_STATUS_CHOICES = (
        ("Private","Private"),
        ("Public Beta","Public Beta"),
        ("Launched","Launched"),
        ("Acquired","Acquired"),
        ("Others","Others"),
    )

    LOOKING_FOR_CHOICES = (
        ("Co-founder","Co-founder"),
        ("Investor","Investor"),
        ("Other","Other"),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)

    name = models.CharField(max_length=255)
    industry = models.CharField(max_length=64, choices=INDUSTRY_CHOICES)
    address = models.CharField(max_length=255)
    contact_no = models.CharField(max_length=255)
    contact_email = models.CharField(max_length=255)
    team_size = models.IntegerField()
    product_status = models.CharField(max_length=64, choices=PRODUCT_STATUS_CHOICES)
    website_url = models.CharField(max_length=255, null=True, blank=True)
    linkedin_url = models.CharField(max_length=255, null=True, blank=True)

    logo = models.FileField(upload_to='core/startups/logo', null=True, blank=True)
    patent = models.FileField(upload_to='core/startups/patent', null=True, blank=True)
    registeration_info = models.FileField(upload_to='core/startups/registeration', null=True, blank=True)

    description = models.TextField()
    pitch_to_investor = models.TextField()

    looking_for = models.CharField(max_length=64, choices=LOOKING_FOR_CHOICES)

    is_verified = models.BooleanField()

    def __str__(self):
        return self.name


class FoundersInfo(models.Model):
    startup = models.ForeignKey(StartupProfile, related_name="founder", on_delete=models.CASCADE)
    name = models.CharField(max_length=64)
    citizenship = models.FileField(upload_to='core/startups/founderinfo')


    def __str__(self):
        return self.name
    

class VentureCaptialInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone_no = models.CharField(max_length=255)
    profile_pic = models.FileField(upload_to='core/vcs/profile_pic')
    pan = models.FileField(upload_to='core/vcs/pan')
    linkedin_url = models.CharField(max_length=255, null=True, blank=True)
    facebook_url = models.CharField(max_length=255, null=True, blank=True)
    twitter_url = models.CharField(max_length=255, null=True, blank=True)
    website = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField()
