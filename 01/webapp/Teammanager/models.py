from django.db import models

# Create your models here.

class TeamManager(models.Model):
    name = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)
    age = models.CharField(max_length=10)
    dob = models.DateField()
    formerclub = models.CharField(max_length=100)
    biography = models.TextField()


