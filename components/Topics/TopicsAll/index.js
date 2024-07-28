"use client";
import styles from "./style.module.scss";
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Pagination } from "react-bootstrap";
import CardComponent from "./CardComponent";


const Topics = ({ pageData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [apps, setApps] = useState([]);
  const cardsPerPage = 10;

  const fetchApps = async (page, pageSize) => {
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/api/pages?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=image`;
      const response = await fetch(url);
      const data = await response.json();
      setApps(data.data);

      setTotalPages(data.meta.pagination.pageCount);
    } catch (error) {
      console.error('Error fetching apps:', error);
    }
  };

  useEffect(() => {
    fetchApps(currentPage, cardsPerPage);
  }, [currentPage]);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderCards = () => {
    return apps.map((card, index) => (
      <Col key={index} sm={12} md={6} className="renderCardsCol">
        <CardComponent
          title={card?.attributes?.title}
          description={card?.attributes?.description}
          imageUrl={card?.attributes?.image?.data[0]?.attributes?.url}
        />
      </Col>
    ));
  };

  const renderPagination = () => {
    let paginationItems = [];
    let startPage = currentPage > 3 ? currentPage - 2 : 1;
    let endPage = currentPage + 2 <= totalPages ? currentPage + 2 : totalPages;

    if (startPage > 1) {
      paginationItems.push(<Pagination.Ellipsis key="startEllipsis" />);
    }

    for (let number = startPage; number <= endPage; number++) {
      paginationItems.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handleClick(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages) {
      paginationItems.push(<Pagination.Ellipsis key="endEllipsis" />);
    }

    return (
      <Pagination>
        <Pagination.Prev
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        />
        {paginationItems}
        <Pagination.Next
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    );
  };

  return (
    <>
      <Container className={styles.topicsCard}>
        <Row>{renderCards()}</Row>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            {renderPagination()}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Topics;

