import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import SideNav2 from "./SideNav2";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #ffffff;
  }
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin: 50px; //-43px하면 side바랑 높이 같음
  width: 100%;
  min-height: 500px;
  background: #ffffff;
  color: #0f0e17;
  border-radius: 8px;
  text-align: left;
`;

const Separator = styled.hr`
  margin: 0;
  padding: 0;
  border: 0;
  height: 1px;
  width: 80%;
  border-top: 1px solid #bbcded;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  color: #242d3d;
  font-size: 1.5rem;
  font-family: sans-serif;
`;

const BackEnd = () => {
    return(
        <Layout>
            <GlobalStyle/>
            <SideNav2/>
            <Main>
                <h2>Back-End Track</h2>
                <Separator></Separator>
                <h4> 
                 사용자에게 보이지 않는 서버와 데이터베이스를 개발 및 관리합니다.
                </h4>
                <img
                src="../img/back1.jpg"
                alt="백엔드트랙"
                width="700px"
                height="400px"
                />
                <h5>
                 배우게 되는 주요 스택 ➡️ Spring boot, Java
                </h5>
                <h3>🦁멋쟁이 사자처럼의 백엔드 아기사자에게 주어지는 혜택!🦁</h3>
                <img
                src="../img/back2.PNG"
                alt="테크잇백1"
                width="1300px"
                height="200px"
                />
                  <img
                src="../img/back3.PNG"
                alt="테크잇백2"
                width="1300px"
                height="180px"
                />
                <Link
                  to="https://techit.education/"
                  target="_blank"
                 >
                 💻 TECHIT 사이트 바로가기
                </Link>
                <h4>
                【Project】  기업 연계, 대학 연합 해커톤 및 프로젝트 참여하며 교내외 학생들과 협업 경험 UP!<br/>
                <br></br>
                【Original】  멋사 계정 발급 (@likelion.org)으로 소속감 UP!<br/>
                <br></br>
                【Study】  테킷 VOD 제공 <br/>
                <small> * 백엔드 트랙 뿐만 아니라 프론트엔드, 디자인, 블록체인 등 다양한 VOD 제공</small><br/>
                <br></br>
                【Spec-Up】  멋쟁이사자처럼대학 수료증 발급으로 풍부한 대외활동 이력 생성
                </h4>
                <h3>🦁세션 커리큘럼🦁</h3>
              
        
            </Main>
        </Layout>
    );
};
export default BackEnd;