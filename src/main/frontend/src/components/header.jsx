import React from "react";
import styles from "../styles/styles.css";
import styled from "styled-components";

const nav_bar = styled.a`
  display: flex;
  flex-direction: row;
  position: relative;
  vertical-align: top;
  height: 60px;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <div>
      <div class="header_bar">
        <a class="menu_name" href="localhost:8080">
          <strong> 살려줘</strong>
        </a>
      </div>

      {/* <div class="nav_wrap"> */}
      <nav class="menu_">
        <div class="container">
          <a class="navbar_1" href="#">
            교양선택
          </a>

          <a class="navbar_2" href="#">
            교양필수
          </a>
        </div>
      </nav>
      {/* </div> */}
    </div>
  );
};

export default Header;
