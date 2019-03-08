"""webapp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from player.views import (PlayerDeleteView,PlayerUpdateView,PlayerViewSet)

router = routers.DefaultRouter()
router.register(r'players', PlayerViewSet,'player')

urlpatterns = [
    path('api-auth/',include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', include('frontend.urls')),
    path('api/players/<pk>/delete/', PlayerDeleteView.as_view()),
    path('api/players/<pk>/update/', PlayerUpdateView.as_view()),
]
