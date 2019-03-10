from django.contrib import admin
from .models import Analyst

# Register your models here.

class AnalystAdmin(admin.ModelAdmin):
     list_display=('name','nationality','age')
admin.site.register(Analyst,AnalystAdmin)