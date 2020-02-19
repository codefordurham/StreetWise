import React from 'react';
import styles from './Sheet.module.css';
import utilitiesSvg from './images/icon-transportation.svg';

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
        <div className={styles.address}>
          <h4>{address}</h4>
        </div>

        <ul className={styles.left}>
          <li><label>Electric </label><a href={data.electCompURL} target="_blank" rel="noopener noreferrer">Duke Energy</a> {data.electCompPhone}</li>
          <li><label>Water </label> <a href={data.waterURL} target="_blank" rel="noopener noreferrer">Durham Water Connection</a> {data.waterPhone} or
            in person at {data.waterAddress}</li>
          <li><label>Gas </label> <a href={data.gasCompURL} target="_blank" rel="noopener noreferrer">{data.gasCompName}</a> {data.gasCompPhone}</li>
          <li><label>Internet </label> <a href={data.internetURL} target="_blank" rel="noopener noreferrer">{data.internetLookupSite}</a></li>
          <li><label>TV </label> <a href={data.TVURL} target="_blank" rel="noopener noreferrer">{data.TVLookupSite}</a></li>
        </ul>

        <ul className={styles.right}>
          <li><label>Trash </label> {data.trashDays}</li>
          <li><label>Recycling </label> {data.recyclingDays}</li>
          <li><label>Nearest Park </label> {data.nearestPark}</li>
          <li><label>Nearest Libraries </label> {data.nearestLibrary}</li>
        </ul>
      </div>
      <div className={styles.health}>
        <h4>Health and Safety</h4>

        <ul>
          <li><label>Fire Dept </label> {data.nearestFireDept}</li>
        </ul>

        <ul>
          <li><label>Police District </label>{data.policeDistrict}</li>
        </ul>

        <ul>
          <li>
            <label>
              Neighborhood Listserv/watch
            </label>{data.neighborhoodListServ}
          </li>
          <li><label>Nearest Hospital/ER/Clinic </label>{data.nearestHospital}</li>
          <li><label>Emergency Alerts </label><a href={data.emergencyAlertsURL}
              target="_blank" rel="noopener noreferrer">{data.emergencyAlertsWebsiteName}</a></li>
        </ul>

      </div>

      <div className={styles.government}>
        <h4>Government</h4>

        <ul>
          <li><label>Poling location </label></li>
          <li> {data.polingLocation} </li>

        </ul>
        <ul>
          <li><label></label>{data.ward}</li>
          <li><label>Durham County Board of Elections </label>{data.boardOfElectPhone}</li>
        </ul>

      </div>

      <div className={styles.transportation}>
        <h4>Transportation</h4>

        <ul>
          <li><label>Find a Taxi </label>{data.taxiInfo}</li>
          <li><label>Find a Bus </label><a href={data.busURL} target="_blank" rel="noopener noreferrer">{data.busWebsiteName}</a></li>
        </ul>

      </div>

      <div className={styles.education}>
        <h4>Education</h4>
        <ul>
          <li><label>Durham School District </label>{data.schoolDistrict}</li>
          <li><label>School Board </label> {data.schoolBoardInfo}</li>
        </ul>
      </div>
    </div>
  );
}

export default Sheet;
