from analyst.models import Analyst
from analyst.serializers import AnalystSerializer
from rest_framework import viewsets

class AnalystViewSet (viewsets.ModelViewSet):
    queryset = Analyst.objects.all()
    serializer_class=AnalystSerializer
