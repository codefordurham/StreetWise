from django import forms
from .models import AddressEntry


class AddressEntryForm(forms.ModelForm):
    class Meta:
        model = AddressEntry
        fields = [
            'address',
          
            ]
