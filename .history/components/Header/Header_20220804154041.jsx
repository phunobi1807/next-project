import React from "react";
import { Container } from "reactstrap";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import Link from "next/link";
import { menuLists } from "../../constants/menu";

const Header = () => {
  return (
    <>
      <Container className="menu">
        <Image
          className="menu-logo"
          src={Logo}
          alt="logo"
          width={116}
          height={60}
        />
        <div className="menu_list">

        </div>
      </Container>
    </>
  );
};

export default Header;
