import re
import robobrowser
from robobrowser import RoboBrowser
from .formatting import formatAddress

#try/except avoids throwing error if local developer does not have geopandas
try:
    import geopandas
    from shapely.geometry import Point
except:
    pass


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
        p = Point(-78.9275085, 35.9768825)
        ward_data = geopandas.read_file('public/data/wards.geojson')

        matching_layers = [i for i, val in enumerate(ward_data.intersects(p)) if val]
        if len(matching_layers) == 0:
            return 'n/a'

        return ward_data.iloc[matching_layers[0]].Ward
    except:
        return 'n/a'
