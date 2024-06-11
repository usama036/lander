"use client";
import styles from "./style.module.scss";
import React, { useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import CardComponent from "./CardComponent";

const cardData = [
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World Avatar World Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
  {
    title: "Avatar World",
    description:
      "Avatar World: City Life is a virtual reality game for children. Players can enter a world full of fantasy to explore, take risks and learn together.",
    imageUrl: "/assets/avatar.svg",
  },
];

const Topics = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  // const handleFirstPage = () => {
  //   setCurrentPage(1);
  // };

  // const handleLastPage = () => {
  //   setCurrentPage(totalPages);
  // };

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
    return currentCards.map((card, index) => (
      <Col key={index} sm={12} md={6} className="renderCardsCol">
        <CardComponent
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
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
        {/* <Pagination.First
          onClick={handleFirstPage}
          disabled={currentPage === 1}
        /> */}
        <Pagination.Prev
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        />
        {paginationItems}
        <Pagination.Next
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        />
        {/* <Pagination.Last
          onClick={handleLastPage}
          // disabled={currentPage === totalPages}
        /> */}
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
