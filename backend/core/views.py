import requests
import json
from django.contrib.auth import authenticate
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from .renderers import UserRenderer
from .models import User, StartupProfile, VentureCaptialInfo
from .serializers import UserRegistrationSerializer, UserLoginSerializer, StartupProfileSerializer, UserProfileSerializer, VentureCapitalSerializer


# Generate Token Manually
def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
      'refresh': str(refresh),
      'access': str(refresh.access_token),
  }


class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = get_tokens_for_user(user)
        email=serializer.data.get('email')
        name=serializer.data.get('name')
        return Response({'token':token,'email':email,'name':name,'msg':'Registration Successful'}, status=status.HTTP_201_CREATED)


class UserLoginView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get('email')
        password = serializer.data.get('password')
        user = authenticate(email=email, password=password)
        if user is not None:
            token = get_tokens_for_user(user)
            serializer = UserProfileSerializer(user)
            return Response({'token':token, 'info':serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)



# class StartupProfileView(ListCreateAPIView):
#     renderer_classes = [UserRenderer]
#     serializer_class = [StartupProfileSerializer]
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return StartupProfile.objects.prefetch_related('founderinfo_set').all().filter(user=self.request.user)


class StartupProfileView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = StartupProfileSerializer

    def get_queryset(self):
        return StartupProfile.objects.prefetch_related('founder').all().filter(user=self.request.user)

class VentureCapitalProfileView(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = VentureCapitalSerializer

    def get_queryset(self):
        return VentureCaptialInfo.objects.all().filter(user=self.request.user)


class KhaltiPaymentView(APIView):
    def post(self, request):
        url = "https://a.khalti.com/api/v2/epayment/initiate/"

        payload = json.dumps({
            "return_url": request.data.get('return_url'),
            "website_url": "https://example.com/",
            "amount": request.data.get('amount'),
            "purchase_order_id": 1,
            "purchase_order_name": "test",
            "customer_info": {
            "name": "Ram Bahadur",
            "email": "test@khalti.com",
            "phone": "9800000001"
            }
        })
        headers = {
            'Authorization': 'key 8dc5e3777aaf4d2595c2ee3a1e10c1f4',
            'Content-Type': 'application/json',
        }

        response = requests.request("POST", url, headers=headers, data=payload)
        print(response.text)
        return Response({"response":response.text})