from django.contrib import admin
from .models import Player

class PlayerAdmin(admin.ModelAdmin):
    list_display=('name','nationality','age','dob','shirtnumber','position','formerclub','biography')
admin.site.register(Player,PlayerAdmin)