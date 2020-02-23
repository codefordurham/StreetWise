import React from 'react';
import styles from './Sheet.module.css';
import SheetRegion from './SheetRegion';
import transportationSvg from './images/icon-transportation.svg';
import governmentSvg from './images/icon-government.svg';
import homeSvg from './images/icon-home.svg';
import safetySvg from './images/icon-health-and-safety.svg';
import educationSvg from './images/icon-education.svg';

function Sheet(props) {
  const { address, data } = props;

  if (!data) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loading}>
          Please wait...
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.utilities}>
        <SheetRegion title={address} icon={homeSvg}>
          <div className={styles.utilitiesWrapper}>
            <dl className={styles.left}>
              <dt>Electric</dt>
              <dd><a href={data.electCompURL} target="_blank" rel="noopener noreferrer">Duke Energy</a> {data.electCompPhone}</dd>
              <dt>Water</dt>
              <dd><a href={data.waterURL} target="_blank" rel="noopener noreferrer">Durham Water Connection</a> {data.waterPhone} or
                in person at {data.waterAddress}</dd>
              <dt>Gas</dt>
              <dd><a href={data.gasCompURL} target="_blank" rel="noopener noreferrer">{data.gasCompName}</a> {data.gasCompPhone}</dd>
              <dt>Internet</dt>
              <dd><a href={data.internetURL} target="_blank" rel="noopener noreferrer">{data.internetLookupSite}</a></dd>
              <dt>TV</dt>
              <dd><a href={data.TVURL} target="_blank" rel="noopener noreferrer">{data.TVLookupSite}</a></dd>
            </dl>

            <dl className={styles.right}>
              <dt>Trash </dt>
              <dd>{data.trashDays}</dd>
              <dt>Recycling </dt>
              <dd>{data.recyclingDays}</dd>
              <dt>Nearest Park </dt>
              <dd>{data.nearestPark}</dd>
              <dt>Nearest Libraries </dt>
              <dd>{data.nearestLibrary}</dd>
            </dl>
          </div>
        </SheetRegion>
      </div>

      <div className={styles.health}>
        <SheetRegion title="Health and Safety" icon={safetySvg}>
          <dl>
            <dt>Fire Dept </dt>
            <dd>{data.nearestFireDept}</dd>
            <dt>Police District </dt>
            <dd>{data.policeDistrict}</dd>
            <dt>Neighborhood Listserv/watch </dt>
            <dd>{data.neighborhoodListServ}</dd>
            <dt>Nearest Hospital/ER/Clinic </dt>
            <dd>{data.nearestHospital}</dd>
            <dt>Emergency Alerts </dt>
            <dd><a href={data.emergencyAlertsURL}
                target="_blank" rel="noopener noreferrer">{data.emergencyAlertsWebsiteName}</a></dd>
          </dl>
        </SheetRegion>
      </div>

      <div className={styles.government}>
        <SheetRegion title="Government" icon={governmentSvg}>
          <dl>
            <dt>Polling location </dt>
            <dd> {data.polingLocation} </dd>
            <dt>Ward</dt>
            <dd>{data.ward}</dd>
            <dt>Durham County Board of Elections </dt>
            <dd>{data.boardOfElectPhone}</dd>
          </dl>
        </SheetRegion>
      </div>

      <div className={styles.transportation}>
        <SheetRegion title="Transportation" icon={transportationSvg}>
          <dl>
            <dt>Find a Taxi </dt>
            <dd>{data.taxiInfo}</dd>
            <dt>Find a Bus </dt>
            <dd><a href={data.busURL} target="_blank" rel="noopener noreferrer">{data.busWebsiteName}</a></dd>
          </dl>
        </SheetRegion>
      </div>

      <div className={styles.education}>
        <SheetRegion title="Education" icon={educationSvg}>
          <dl>
            <dt>Durham School District </dt>
            <dd>{data.schoolDistrict}</dd>
            <dt>School Board </dt>
            <dd>{data.schoolBoardInfo}</dd>
          </dl>
        </SheetRegion>
      </div>
    </div>
  );
}

export default Sheet;
