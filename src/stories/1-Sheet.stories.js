import React from 'react';
import Sheet from '../Sheet';

export default {
  title: 'Search Results',
};

export const loadingData = () => <Sheet address={null} />
loadingData.story = {
  name: 'Loading data',
};

const sampleData = {
  "address": "2410 Glendale Avenue",
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
  "TVURL": "https://www.cabletv.com/nc/durham?zip=27704",
  "trashDays": "n/a",
  "recyclingDays": "n/a",
  "nearestPark": "n/a",
  "nearestLibrary": "Stanford L. Warren Branch Library, 1201 Fayetteville St (919) 560-0270",
  "nearestFireDept": "n/a",
  "policeDistrict": 2,
  "neighborhoodListServ": "n/a",
  "ward": "Ward 1",
  "emergencyAlertsWebsiteName": "Alerts Center",
  "emergencyAlertsURL": "https://member.everbridge.net/index/892807736725273#/login",
  "nearestHospital": "n/a",
  "polingLocation": "400 W Club Blvd",
  "boardOfElectPhone": "(919)560-0700",
  "taxiInfo": "n/a",
  "busWebsiteName": "godurhamtransit.org",
  "busURL": "https://godurhamtransit.org/",
  "schoolDistrict": "n/a",
  "schoolBoardInfo": "n/a"
}

export const sampleResults = () => <Sheet address="101 Main St" data={sampleData} />
sampleResults.story = {
  name: 'Sample results',
};
