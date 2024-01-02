from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from .renderers import UserRenderer
from .models import User
from .serializers import UserRegistrationSerializer


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
