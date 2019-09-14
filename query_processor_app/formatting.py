def formatAddress(address):
    address = address.lower()
    makeCap = False
    new_address = ""
    for i in address:
        if makeCap == True: new_address = new_address + i.upper()
        else: new_address = new_address + i
        if i == " " : makeCap = True
        else: makeCap = False
    return new_address