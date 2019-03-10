from rest_framework import serializers
from Teammanager.models import TeamManager

class TeamManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model=TeamManager
        fields='__all__'
