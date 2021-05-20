import React from "react";
import styled from "styled-components";
import "./errorMessage.css";
// process.env.PUBLIC_URL + /img/error.jpg alt ='error'
const Message = styled.div`
  text-align: center;
  font-size: 20px;
  color: #cf081f;
  text-shadow: 1px 1px 1px black;
  background: url(./img/error.jpg) center center/cover no-repeat;
  width: 100%;
  height: 15em;
`;

const ErrorMessage = () => {
  return (
    <>
      {/* <img src={process.env.PUBLIC_URL + "/img/error.jpg"} alt="error"></img> */}
      <Message>Data were being provisioned. Please try again</Message>
    </>
  );
};

export default ErrorMessage;
