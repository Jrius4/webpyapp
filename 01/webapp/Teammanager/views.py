from Teammanager.models import TeamManager
from Teammanager.serializers import TeamManagerSerializer
from rest_framework import viewsets

class TeamManagerViewSet (viewsets.ModelViewSet):
    queryset = TeamManager.objects.all()
    serializer_class=TeamManagerSerializer