from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .forms import AddressEntryForm
from .models import AddressEntry
from finder_functions/find_polling_place import findPollingPlace
from .find_police_district import findPoliceDistrict
from .find_ward import findWard
from .nearest_library import nearest_library
#from .find_nearest_park import findNearestPark
import requests


# Get data from end user
def takeUserInputView(request):
    form = AddressEntryForm(request.POST or None)
    if form.is_valid():
        form.save()
    context = {"form": form}
    return render(request, "home.html", context)


def main(request):

    if request.method == "POST":
        address = request.POST.get("address")
    address = address + ' Durham, NC'
    

    url = "https://us1.locationiq.com/v1/search.php"
    data = {'key': 'pk.aa40b962e9898c9fbc72b3d9cd662af7','q': address, 'format': 'json'}
    response = requests.get(url, params=data)
    return_info = response.json()
    first_return_dict = return_info[0]
    result_address = first_return_dict['display_name']
    
    #extract user coordintaes
    lat = float(first_return_dict['lat'])
    lon = float(first_return_dict['lon'])
    #extract street address 
    comma_count = 0
    street_name = ""
    for character in result_address:
        if character != ",":
            street_name += character
        else:
            comma_count += 1
            if comma_count == 2:
                break
    #extract zip code
    reversed_address = result_address[::-1]
    zip_code = ""
    for l in reversed_address:
        if l.isdigit():
            zip_code = zip_code + l
            if len(zip_code) == 5:
                break
    zip_code = zip_code[::-1]

    # call functions that gather data
        
    polling_address = findPollingPlace(street_name, zip_code)
    ward = findWard(street_name, zip_code, lat, lon)
    police_district  = findPoliceDistrict(street_name, zip_code, lat, lon)
    library = nearest_library(street_name, zip_code, lat, lon)
    #nearest_park = findNearestPark(street_name, zip_code, lat, lon)


    # send data to be displayed on results page
    return render(
        request,
        "./results.html",
        {
            "address": street_name,
            "electCompName": "Duke Energy",
            "electCompURL": "https://www.duke-energy.com",
            "electCompPhone": "(800)777-9898",
            "waterURL": "https://durhamnc.gov/Faq.aspx?QID=186",
            "waterPhone": "(919) 560-4326",
            "waterAddress": "101 City Hall Plaza 3rd Floor",
            "gasCompName": "Dominion Energy / PSNC",
            "gasCompURL": "https://www.psncenergy.com",
            "gasCompPhone": "(877) 776-2427",
            "internetLookupSite": "highspeedinternet.com",
            "internetURL": "https://www.highspeedinternet.com/nc/durham",
            "TVLookupSite": "cabletv.com",
            "TVURL": "https://www.cabletv.com/nc/durham?zip=" + zip_code,
            "trashDays": "n/a",
            "recyclingDays": "n/a",
            "nearestPark": "n/a",
            "nearestLibrary": library,
            "nearestFireDept": "n/a",
            "policeDistrict": police_district,
            "neighborhoodListServ": "n/a",
            "ward": ward,
            "emergencyAlertsWebsiteName": "Alerts Center",
            "emergencyAlertsURL": "https://member.everbridge.net/index/892807736725273#/login",
            "nearestHospital": "n/a",
            "polingLocation": polling_address,
            "boardOfElectPhone": "(919)560-0700",
            "taxiInfo": "n/a",
            "busWebsiteName": "godurhamtransit.org",
            "busURL": "https://godurhamtransit.org/",
            "schoolDistrict": "n/a",
            "schoolBoardInfo": "n/a",
        },
    )
