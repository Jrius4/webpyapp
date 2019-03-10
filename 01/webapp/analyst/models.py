from django.db import models

class Analyst(models.Model):
    name = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)
    age = models.CharField(max_length=10)


    def __str__(self):
        return self.name
