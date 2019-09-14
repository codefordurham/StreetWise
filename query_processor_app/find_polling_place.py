import re
import robobrowser
from robobrowser import RoboBrowser
from .formatting import formatAddress

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
    polling_address_copy = polling_address
    polling_address = formatAddress(polling_address_copy)
    return polling_address