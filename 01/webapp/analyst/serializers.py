from rest_framework import serializers
from analyst.models import Analyst

class AnalystSerializer(serializers.ModelSerializer):
    class Meta:
        model=Analyst
        fields='__all__'