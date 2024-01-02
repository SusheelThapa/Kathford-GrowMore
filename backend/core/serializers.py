from rest_framework import serializers
from .models import User


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'user_type', 'name','password']
        extra_kwargs = {"password":{"write_only":True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)