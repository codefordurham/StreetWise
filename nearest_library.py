def nearest_library(street_address, zip, lat, lon):

#STILL A WORK IN PROGRESS!

    libraries = [{'id': 1, 'name': 'East Regional Library', 'address': '211 Lick Creek Lane', 'phone': '(919) 560-0203', 'url': 'https://durhamcountylibrary.org/location/east/', 'lat': 35.977852, 'lon': -78.8102151706306}
      {'id': 2, 'name': 'North Regional Library', 'address': '221 Milton Road', 'phone': '(919) 560-0231', 'url': 'https://durhamcountylibrary.org/location/north/', 'lat': 36.0875876, 'lon': -78.9144571075342}
      {'id': 3, 'name': 'South Regional Library', 'address': '4505 S. Alston Ave', 'phone': '(919) 560-7410', 'url': 'https://durhamcountylibrary.org/location/south/', 'lat': 35.9029253, 'lon': -78.8886138}
      {'id': 4, 'name': 'Southwest Regional Library', 'address': '3605 Shannon Road', 'phone': '(919) 560-8590', 'url': 'https://durhamcountylibrary.org/location/southwest/', 'lat': 35.9586467, 'lon': -78.9545399095808}]
     #find closest library based on coordinates
     shortest_distance = 1000000
    for location in libraries:
        current_lat = float(location['lat'])
        current_lon = float(location['lon'])
        current_distance = abs(current_lat - lat) + abs(current_lon  - lon)
        if current_distance < shortest_distance:
            id_for_closest = location['id']
            shortest_distance = current_distance
	name =  libraries[id_for_closest]['name']
	address =  libraries[id_for_closest]['address']
	phone =    libraries[id_for_closest]['phone']
	resulting_info = {'name':name,'address':address, 'phone':phone}
  	return (resulting_info)
