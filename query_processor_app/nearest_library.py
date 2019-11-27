  
def nearest_library(street_address, zip, lat, lon):

    libraries = [{'id': 1, 'name': 'East Regional Library', 'address': '211 Lick Creek Lane', 'phone': '(919) 560-0203', 'url': 'https://durhamcountylibrary.org/location/east/', 'lat': 35.977852, 'lon': -78.8102151706306},
      {'id': 2, 'name': 'North Regional Library', 'address': '221 Milton Road', 'phone': '(919) 560-0231', 'url': 'https://durhamcountylibrary.org/location/north/', 'lat': 36.0875876, 'lon': -78.9144571075342},
      {'id': 3, 'name': 'South Regional Library', 'address': '4505 S. Alston Ave', 'phone': '(919) 560-7410', 'url': 'https://durhamcountylibrary.org/location/south/', 'lat': 35.9029253, 'lon': -78.8886138},
      {'id': 4, 'name': 'Southwest Regional Library', 'address': '3605 Shannon Road', 'phone': '(919) 560-8590', 'url': 'https://durhamcountylibrary.org/location/southwest/', 'lat': 35.9586467, 'lon': -78.9545399095808},
      {'id': 5, 'name': 'Stanford L. Warren Branch Library', 'address': '1201 Fayetteville St', 'phone': '(919) 560-0270', 'url': 'https://durhamcountylibrary.org/', 'lat': 35.982579, 'lon': -78.898558}]
     #find closest library based on coordinates
    shortest_distance = 1000000
    for location in libraries:
        current_lat = float(location['lat'])
        current_lon = float(location['lon'])
        current_distance = abs(current_lat - lat) + abs(current_lon  - lon)
        if current_distance < shortest_distance:
            id_for_closest = location['id']
            shortest_distance = current_distance

    #pull library info based on id of closest location
    for i in libraries:	
        if i['id'] == id_for_closest:
            library = i['name']	+ ", " + i['address'] + " " + i['phone']

    return library
