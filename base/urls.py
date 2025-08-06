from django.urls import path

from . import views

urlpatterns = [
    path("register/", views.register, name="register_person"),
    path("login/", views.CustomTokenObtainPairView.as_view(), name="login_person"),
]
