import re
import robobrowser
from robobrowser import RoboBrowser
from .formatting import formatAddress




def findPollingPlace(address, zip_code):
    try:
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
        polling_address_copy = polling_address
        polling_address = formatAddress(polling_address_copy)
        return polling_address
    except:
        #if no result returned try changing East, West, North or South to EWN orS
        return 'n/a'

def findWard(address, zip_code, lat, lon):
    try:  #try/except avoids throwing error if local developer does not have geopandas
        # TODO how do I get the lat/lng from the address and zip_code?
        p = Point(lon, lat)
        ward_data = geopandas.read_file('public/data/wards.geojson')

        matching_layers = [i for i, val in enumerate(ward_data.intersects(p)) if val]
        if len(matching_layers) == 0:
            return 'Ward n/a'
        
        return ward_data.iloc[matching_layers[0]].Ward
    except:
        return 'Ward n/a'

def findPoliceDistrict(address, zip_code, lat, lon):
    try:  #try/except avoids throwing error if local developer does not have geopandas
        # TODO how do I get the lat/lng from the address and zip_code?
        p = Point(lon, lat)
        police_district_data = geopandas.read_file('public/data/Police_Districts.geojson')

        matching_layers = [i for i, val in enumerate(police_district_data.intersects(p)) if val]
        if len(matching_layers) == 0:
            return 'n/a'
        
        return police_district_data.iloc[matching_layers[0]].DISTNUM
    except:
        return 'n/a'
