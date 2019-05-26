import React from "react";
import styled from "styled-components";
import Header from "./navbar";
import Footer from "./footer";

const PageWrapper = styled.div`
  min-height: 512px;
`;

export default ({ children }) => {
  return (
    <>
      <Header />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  );
};
