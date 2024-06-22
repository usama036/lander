'use client'
import { Row, Col, Container } from "react-bootstrap";
import GameDetails from "../../../components/homeDetail/gameDetails";
import AboutGame from "../../../components/homeDetail/aboutGame";
import Versions from "../../../components/homeDetail/versions";
import GameScreenshots from "../../../components/homeDetail/gamescreenshots";
import SideCard from "../../../components/Topics/sideCard";
import { useEffect, useState } from 'react';

const HomeDetails = ({searchParams}) => {
  console.log('searchParams',searchParams);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      let urlString =window !== undefined && window.location.search;

      let cleanedString = urlString.replace(/^\?name=/, '');

      try {const url = `http://localhost:1337/api/blog-posts?filters[slug][$eq]=${cleanedString}`
        const response = await fetch(url);
        const data = await response.json();
        if (response.status === 200) {
          setPost(data[0]); // Assuming you want the first post if there are multiple
        } else {
          setError(data);
        }
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
          <Col className="col-md-8 col-lg-9">
            <GameDetails />
            <div className="Advertisement-Two">Advertisement two</div>
            <AboutGame />
            <Versions />
            <GameScreenshots />
          </Col>
          <Col className="col-md-4 col-lg-3">
            <div className="Advertisement">Advertisement</div>
            <SideCard />
            <SideCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeDetails;
