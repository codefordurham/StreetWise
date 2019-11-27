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