"use client"; // Add this directive at the top
import React, { useState, useEffect } from "react";
// import Link from "next/link";
import styles from "./style.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Container } from "react-bootstrap";
import PopularApps from "../../../components/apps/PopularApps";
// import Categories from "../../../components/apps/categories";
import AppsTrendingSearch from "../../../components/apps/appsTrendingSearch";
import GamesTrendingSearch from "../../../components/apps/gamesTrendingSearch";

const tabsData = [
  {
    id: 1,
    title: "All",
    eventKey: "All",
  },
  {
    id: 2,
    img: "/assets/gameboy.svg",
    alt: "gameboy",
    // activeimg: "/assets/gameboy-green.svg",
    title: "Games",
    eventKey: "Games",
    component: <GamesTrendingSearch />,
  },
  {
    id: 3,
    img: "/assets/apps-logo.svg",
    // activeimg: "/assets/mobile-green.svg",
    alt: "apps-logo",
    title: "Apps",
    eventKey: "Apps",
    component: <AppsTrendingSearch />,
    // disabled: true,
  },
  {
    id: 4,
    img: "/assets/apps-logo.svg",
    alt: "apps-logo",
    // activeimg: "/assets/book-saved-green.svg",
    title: "Topics",
    eventKey: "Topics",
    component: <AppsTrendingSearch />,
    // disabled: true,
  },
];
const TopCharts = () => {
  const [activeKey, setActiveKey] = useState("All");

  return (
    <>
      <section className={styles.TopCharts}>
        <Container className={styles.Container}>
          <h2>Top Charts</h2>
          <Tabs
            activeKey={activeKey}
            // defaultActiveKey="All"
            // id="uncontrolled-tab-example"
            className={styles.tabs}
            onSelect={(k) => setActiveKey(k)}
          >
            {tabsData.map((data, index) => (
              <Tab
                activeKey={activeKey}
                onSelect={(k) => setActiveKey(k)}
                key={index}
                eventKey={data.eventKey}
                // disabled={data.disabled}
                className={styles.tab}
                title={
                  <div className="d-flex align-items-center">
                    {/* <img src={data.img} alt={data.alt} /> */}
                    {data.id !== 1 && <img src={data.img} alt={data.alt} />}
                    {/* {!(activeKey === data.eventKey) && data.activeimg && (
                      <img src={data.activeimg} alt={data.alt} />
                    )} */}
                    <p>{data.title}</p>
                  </div>
                }
              >
                {data.eventKey === "All" && <AppsTrendingSearch />}
                {data.eventKey === "All" && <GamesTrendingSearch />}
                {data.eventKey === "All" && <PopularApps />}
                {data.eventKey === "All" && <PopularApps />}
                <div className={styles.tabs}>{data.component}</div>
              </Tab>
            ))}
          </Tabs>
        </Container>
      </section>
    </>
  );
};

export default TopCharts;
