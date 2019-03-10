from player.models import Player
from player.serializers import PlayerSerializer
from rest_framework import viewsets

class PlayerViewSet (viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class=PlayerSerializer


