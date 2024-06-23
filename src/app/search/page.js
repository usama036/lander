'use client'
import { Container } from "react-bootstrap";

import Search from "../../../components/home/search";
import { useEffect, useState } from 'react';
import { fetchPost } from '../../../utlis';

const SearchComponent = () => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetchPost().then(res => {
      setPost(res);
    }).catch(err => {
      setError(err);
    });
  }, []);
  return (
    <>
      <Container className="TopicsMain">
        <Search post={post} />
      </Container>
    </>
  );
};

export default SearchComponent;
