from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .forms import AddressEntryForm
from .models import AddressEntry
from .find_polling_place import findPollingPlace


#Get data from end user
def takeUserInputView(request):
    form = AddressEntryForm(request.POST or None)
    if form.is_valid():
        form.save()
    context = {
        'form': form
    }
    return render(request, "home.html", context)    

def main(request):
    
    if request.method == 'POST':
       address = request.POST.get('address')
       zip_code = request.POST.get('zip_code')


#call functions that gather data
    polling_address = findPollingPlace(address, zip_code)


    
#send data to be displayed on results page   
    return render(request, "./results.html",
    {
     'address': address,
     'electCompName' : 'Duke Energy',
     'electCompURL' : 'https://www.duke-energy.com',
     'electCompPhone': '(800)777-9898',
     'waterURL': 'https://durhamnc.gov/Faq.aspx?QID=186',
     'waterPhone':'(919) 560-4326',
     'waterAddress': '101 City Hall Plaza 3rd Floor',
     'gasCompName': 'Dominion Energy / PSNC', 
     'gasCompURL':'https://www.psncenergy.com',
     'gasCompPhone':'(877) 776-2427',
     'internetLookupSite':'highspeedinternet.com',
     'internetURL':'https://www.highspeedinternet.com/nc/durham',
     'TVLookupSite':'cabletv.com',
     'TVURL':'https://www.cabletv.com/nc/durham?zip=' + zip_code,
      'trashDays':'n/a',
      'recyclingDays':'n/a',
      'nearestPark':'n/a',
      'nearestLibrary':'n/a',
      'nearestFireDept':'n/a',  
      'policePhone':'(919) 560-4935 (for emergency call 911)',
      'neighborhoodListServ':'n/a',
      'ward':'n/a',
      'emergencyAlertsWebsiteName':'Alerts Center',
      'emergencyAlertsURL':'https://member.everbridge.net/index/892807736725273#/login',
      'nearestHospital':'n/a',
      'polingLocation':polling_address,
      'boardOfElectPhone':'(919)560-0700',
      'taxiInfo':'n/a',
      'busWebsiteName': 'godurhamtransit.org',
      'busURL':'https://godurhamtransit.org/',
      'schoolDistrict':'n/a',
      'schoolBoardInfo':'n/a'
     })




   
    
    
  
