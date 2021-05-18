import React from "react";
import styled from "styled-components";

const Message = styled.div`
  text-align: center;
  font-size: 20px;
  color: #cf081f;
  text-shadow: 1px 1px 1px black;
`;

const ErrorMessage = () => {
  return <Message>Data were being provisioned. Please try again</Message>;
};

export default ErrorMessage;
