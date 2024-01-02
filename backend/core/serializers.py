from rest_framework import serializers
from .models import User, StartupProfile, FoundersInfo, VentureCaptialInfo


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'user_type', 'name','password']
        extra_kwargs = {"password":{"write_only":True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
    

class UserLoginSerializer(serializers.ModelSerializer):
	email = serializers.EmailField(max_length=255)
	class Meta:
		model = User
		fields = ['email', 'password']
            

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'user_type']


class FounderInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoundersInfo
        fields = ['name','citizenship']

class StartupProfileSerializer(serializers.ModelSerializer):
	founder = FounderInfoSerializer(many=True,required=False)
	class Meta:
		model = StartupProfile
		fields = ['id', 'user', 'name', 'industry', 'address', 'contact_no', 'contact_email', 'team_size','product_status', 'website_url', 'linkedin_url', 'logo', 'patent',
             'registeration_info', 'description', 'pitch_to_investor', 'looking_for', 'is_verified', 'founder',]
            
	def create(self, validated_data):
		founderinfo_data = validated_data.pop('founder', [])
		startup = StartupProfile.objects.create(**validated_data)
            
		for founderi in founderinfo_data:
			FoundersInfo.objects.create(startup=startup, **founderi)
        
		return startup


class VentureCapitalSerializer(serializers.ModelSerializer):
      class Meta:
            model = VentureCaptialInfo
            fields = ['id', 'user', 'name', 'email', 'address', 'phone_no', 'profile_pic', 'pan', 'linkedin_url', 'facebook_url', 'twitter_url', 'website', 'description']
             
