#try/except avoids throwing error if local developer does not have geopandas
try:
    import geopandas
    from shapely.geometry import Point
except:
    pass

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