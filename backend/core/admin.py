from django.contrib import admin

from .models import User, StartupProfile, FoundersInfo

admin.site.register(User)
admin.site.register(StartupProfile)
admin.site.register(FoundersInfo)