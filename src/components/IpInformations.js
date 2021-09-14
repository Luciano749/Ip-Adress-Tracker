import styles from "./IpInformations.module.css";

import { useIp } from "../context/IpContext";

const IpInformations = () => {
  const { ipSearchResult } = useIp({});

  return (
    <div className={styles.IpInformations}>
      <div className={styles.information}>
        <h4>IP ADRESS</h4>
        <h2>{ipSearchResult.ip ? ipSearchResult.ip : "none"}</h2>
      </div>

      <div className={styles.information}>
        <h4>LOCATION</h4>
        <h2>
          {ipSearchResult.location
            ? ipSearchResult.location.city +
              "-" +
              ipSearchResult.location.country
            : "none"}
        </h2>
      </div>

      <div className={styles.information}>
        <h4>TIMEZONE</h4>
        <h2>
          {ipSearchResult.location ? ipSearchResult.location.timezone : "none"}
        </h2>
      </div>

      <div className={styles.information}>
        <h4>ISP</h4>
        <h2>{ipSearchResult.isp ? ipSearchResult.isp : "none"}</h2>
      </div>
    </div>
  );
};
export default IpInformations;
