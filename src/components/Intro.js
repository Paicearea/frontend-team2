import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import SideNav from "./SideNav";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffffff;
  }
`;
const Main = styled.main`
  margin: 32px;
  width: 100%;
  min-height: 500px;
  background: #ffffff;
  color: #4f85eb;
  border-radius: 8px;
  text-align: center;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  color: #a7a9be;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

const Intro = () => {
  return (
    <Layout>
      <GlobalStyle />
      <SideNav />
      <Main>
        <h1>INTRO</h1>
      </Main>
    </Layout>
  );
};

export default Intro;
