from django.urls import path

from .views import UserRegistrationView

urlpatterns = [
    path('user/', UserRegistrationView.as_view()),
]
