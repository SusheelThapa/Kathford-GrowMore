from django.urls import path

from .views import UserRegistrationView, UserLoginView, StartupProfileView

urlpatterns = [
    path('user/', UserRegistrationView.as_view()),
    path('login/', UserLoginView.as_view()),
    path('user/startup/', StartupProfileView.as_view()),
]
