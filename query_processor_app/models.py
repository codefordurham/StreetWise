from django.db import models

class AddressEntry(models.Model):
    address       = models.CharField(max_length=70)
