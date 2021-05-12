import React from "react";

import "./app-header.css";

import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    /* color: ${(props) => (props.colored ? "red" : "black")}; */
    /* :hover {
      color: yellowgreen;
      cursor: cell;
    } */
  }
  h2 {
    font-size: 1.2em;
    color: grey;
  }
`;

const AppHeader = ({ liked, allPosts }) => {
  return (
    <Header as="a">
      <h1>Yevhen Pyshiev</h1>
      <h2>
        {allPosts} records, liked {liked}
      </h2>
    </Header>
  );
};

export default AppHeader;
