'use client'
import { Row, Col, Container } from "react-bootstrap";
import TopicsAll from "../../../components/Topics/TopicsAll";
import SideCard from "../../../components/Topics/sideCard";
import { useEffect, useState } from 'react';

const Topics = () => {
  const [error, setError] = useState(null);
  const [apps, setApps] = useState(null);
  const [games, setGames] = useState(null);

  useEffect(() => {
    async function fetchPost() {

      try {

        const appsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog-posts?pagination[page]=1&pagination[pageSize]=10&populate=category&filters[category][PageCategory][$eq]=Apps&filters[isSideCardShow][$eq]=true`);
        const appsData = await appsResponse.json();
        setApps(appsData);

        // Fetch Games data
        const gamesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog-posts?pagination[page]=1&pagination[pageSize]=10&populate=category&filters[category][PageCategory][$eq]=Games&filters[isSideCardShow][$eq]=true`);
        const gamesData = await gamesResponse.json();
        setGames(gamesData);

      } catch (err) {
        setError({ error: 'Failed to fetch data' });
      }
    }

    fetchPost();
  }, []);
  return (
    <>
      <Container className="TopicsMain">
        <Row>
          <Col className={`col-sm-12 col-md-8 col-xxxl-8`}>
            <TopicsAll />
          </Col>
          <Col className={`col-sm-12 col-md-4 col-xxxl-4`}>
            <SideCard post={games?.data} type='Games' />
            <SideCard post={apps?.data} type='Apps' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Topics;
