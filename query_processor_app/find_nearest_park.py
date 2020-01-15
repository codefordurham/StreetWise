#try/except avoids throwing error if local developer does not have geopandas
try:
    import geopandas
    from shapely.geometry import Point
except:
    pass

def findNearestPark(address, zip_code, lat, lon):
    try:  #try/except avoids throwing error if local developer does not have geopandas
        
        p = Point(lon, lat)
        nearest_park_data = geopandas.read_file('public/data/Parks.geojson')

        matching_layers = [i for i, val in enumerate( nearest_park_data.intersects(p)) if val]
        if len(matching_layers) == 0:
            return 'n/a'
        
        return  nearest_park_data.iloc[matching_layers[0]].NAME
    except:
        return 'n/a'