from player.models import Player
from player.serializers import PlayerSerializer
from rest_framework import viewsets
from rest_framework.generics import (DestroyAPIView, UpdateAPIView)

class PlayerViewSet (viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class=PlayerSerializer


class PlayerUpdateView (UpdateAPIView):
    queryset = Player.objects.all()
    serializer_class=PlayerSerializer


class PlayerDeleteView (DestroyAPIView):
    queryset = Player.objects.all()
    serializer_class=PlayerSerializer


