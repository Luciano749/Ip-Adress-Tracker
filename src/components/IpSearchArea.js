import { useState } from "react";

import styles from "./IpSearchArea.module.css";
import IpInformations from "./IpInformations";
import arrow from "../image/icon-arrow.svg";

import { useIp } from "../context/IpContext";

const IpSearchArea = () => {
  const [searchInputValue, setSearchInputValue] = useState("8.8.8.8");

  const { setIpSearchResult } = useIp({});

  const searchIp = () => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_SNYYFpyTer8ziFbMAmPPSJy6Sf9ll&domain=${searchInputValue}`
    )
      .then((response) => response.json())
      .then((response) => {
        setIpSearchResult(response);
      });
  };

  const pressSearchIp = (e) => {
    if (e.key === "Enter") {
      fetch(
        `https://geo.ipify.org/api/v1?apiKey=at_SNYYFpyTer8ziFbMAmPPSJy6Sf9ll&domain=${searchInputValue}`
      )
        .then((response) => response.json())
        .then((response) => {
          setIpSearchResult(response);
        });
    }
  };

  return (
    <section className={styles.ipArea}>
      <div className={styles.inputContainer}>
        <h1>IP Address Tracker</h1>
        <div className={styles.inputArea}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            onChange={(e) => setSearchInputValue(e.target.value)}
            onKeyUp={pressSearchIp}
          />

          <button className={styles.searchButton} onClick={searchIp}>
            <img src={arrow} alt="arrow" />
          </button>
        </div>
      </div>

      <IpInformations />
    </section>
  );
};
export default IpSearchArea;
