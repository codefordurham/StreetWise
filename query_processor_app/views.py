from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .forms import AddressEntryForm
from .models import AddressEntry


def takeUserInputView(request):
    form = AddressEntryForm(request.POST or None)
    if form.is_valid():
        form.save()
    context = {
        'form': form
    }
    return render(request, "home.html", context)

def findData(request):
    if request.method == 'POST':
       address = request.POST.get('address')
    closestGasStation = "Shell Gas Station"
    linkToClosestGasStation = 'https://www.yelp.com/biz/shell-durham'
    return render(request, "./give_results.html",{'address': address, 'closestGasStation': closestGasStation, 'linkToClosestGasStation': linkToClosestGasStation})
