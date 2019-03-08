from django.db import models

class Player(models.Model):
    name = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)
    age = models.CharField(max_length=10)
    dob = models.DateField()
    shirtnumber = models.CharField(max_length=60)
    position = models.CharField(max_length=60)
    formerclub = models.CharField(max_length=100)
    biography = models.TextField()

    def __str__(self):
        return self.name

