from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import (
    CustomTokenObtainPairSerializer,
    UserRegistrationSerializer,
    UserSerializer,
)

# Create your views here.


@api_view(["POST"])
def register(request):
    if request.method == "POST":
        data = request.data
        data["username"] = data["email"]
        serializer = UserRegistrationSerializer(data=data)

        if serializer.is_valid():
            user = serializer.save()
            serializer = UserSerializer(user)
            return Response(
                {"message": "Person registered successfully", "user": serializer.data},
                status=status.HTTP_201_CREATED,
            )
        print("Serializer Errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
