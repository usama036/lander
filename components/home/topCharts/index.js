"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import PopularApps from "../../../components/apps/PopularApps";
import AppsTrendingSearch from "../../../components/apps/appsTrendingSearch";
import TopicsTrendingSearch from "../../../components/apps/appsTrendingSearch/index2";
import GamesTrendingSearch from "../../../components/apps/gamesTrendingSearch";
import { useRouter } from 'next/navigation'
import Image from "next/image";



const TopCharts =  ({pageAppData,pageGameData,apps,games,topics}) => {
  const [activeKey, setActiveKey] = useState("All");
  const router = useRouter()

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
      title: "Games",
      eventKey: "Games",
      component: <GamesTrendingSearch games={games}/>,
    },
    {
      id: 3,
      img: "/assets/apps-logo.svg",
      alt: "apps-logo",
      title: "Apps",
      eventKey: "Apps",
      component: <AppsTrendingSearch  apps={apps} />,
      // disabled: true,
    },
    {
      id: 4,
      img: "/assets/apps-logo.svg",
      alt: "apps-logo",
      // activeimg: "/assets/book-saved-green.svg",
      title: "Topics",
      eventKey: "Topics",
      component: <TopicsTrendingSearch   apps={topics} />,
      // disabled: true,
    },
  ];
  return (
    <>
      <section className={styles.TopCharts}>
        <Container className={styles.Container}>
          <h2>Top Charts</h2>
          <Tabs
            activeKey={activeKey}
            className={styles.tabs}
            onSelect={(k) => setActiveKey(k)}
          >
            {tabsData.map((data, index) => (
              <Tab
                activeKey={activeKey}
                onSelect={(k) => setActiveKey(k)}
                key={index}
                eventKey={data.eventKey}
                className={styles.tab}
                title={
                  <div className="d-flex align-items-center">
                    {data.id !== 1 && (
                      <Image
                        width={20}
                        height={20}
                        src={data.img}
                        alt={data.alt}
                      />
                    )}
                    <p>{data.title}</p>
                  </div>
                }
              >
                {data.eventKey === "All" && <AppsTrendingSearch apps={apps}/>}
                {data.eventKey === "All" && <GamesTrendingSearch games={games}/>}
                {data.eventKey === "All" && <PopularApps pageData={pageAppData}/>}
                {data.eventKey === "All" && <PopularApps pageData={pageGameData} />}
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
