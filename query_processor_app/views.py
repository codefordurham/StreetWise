from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .forms import AddressEntryForm
from .models import AddressEntry
import re
import robobrowser
from robobrowser import RoboBrowser

##### MAIN FUNCTION GETS DATA FROM END USER AND SENDS IT TO BE DSIPLAYED ON RESULTS PAGE##########
def main(request):

    #Get data from end user
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
     'waterPhone':'919-560-4326',
     'waterAddress': '101 City Hall Plaza 3rd Floor',
     'gasCompName': 'Dominion Energy / PSNC', 
     'gasCompURL':'https://www.psncenergy.com',
     'gasCompPhone':'n/a',
     'internetLookupSite':'highspeedinternet.com',
     'internetURL':'https://www.highspeedinternet.com/nc/durham',
     'TVwebsite':'n/a',
     'trashWebsite':'n/a',
     'trashURL':'n/a',
     'recuclingWebsite':'n/a',
     'recyclingURL':'n/a',
     'nearestPark':'n/a',
     'nearestLibrary':'n/a',
     'nearestFireDept':'n/a',
     'policeURL':'https://durhamnc.gov/149/Police-Department',
     'policePhone':'(919) 560-4935',
     'neighborhoodListServ':'n/a',
     'emergencyAlertsURL':'https://member.everbridge.net/index/892807736725273#/login',
     'ward':'n/a',
     'polingLocation':polling_address,
     'boardOfElectPhone':'(919)560-0700',
     'taxiName':'n/a',
     'taxiURL':'n/a',
     'taxiPhone':'n/a',
     'busURL':'https://godurhamtransit.org/',
     'schoolDistrictName':'n/a',
     'schoolDistrictPhone':'n/a',
     'schoolBoardInfo':'n/a'
     })

#################### END OF MAIN FUNCTION #######################################################

#################### START OF FUNCTIONS THAT GATHER DATA#########################################

def findPollingPlace(address, zip_code):
    br = RoboBrowser()
    br.open("https://vt.ncsbe.gov/PPLkup/")
    form = br.get_form()
    form['StreetAddress'] = address
    form['City'] = "Durham"
    form['Zip'] = zip_code
    br.submit_form(form)
    polling_address_raw = str(br.parsed())
    start = 'q='
    end = ',DURHAM'
    polling_address = re.search('%s(.*)%s' % (start, end), polling_address_raw).group(1)
    return polling_address

#################### END OF FUNCTIONS THAT GATHER DATA ###########################################


def takeUserInputView(request):
    form = AddressEntryForm(request.POST or None)
    if form.is_valid():
        form.save()
    context = {
        'form': form
    }
    return render(request, "home.html", context)
   
    
    
  
