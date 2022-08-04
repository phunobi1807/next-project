import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import Link from "next/link";
import { menuLists } from "../../constants/menu";
import classNames from "classnames";

const Header = () => {
  const [isSticky, setisSticky] = useState(false);

  useEffect(() =. {
    const staticHeightOfMenu = 92;
  }, [])

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
        <div className="menu__list">
          {menuLists.map((item) => (
            <Link key={item.id} href={item.link}>
              <a className="menu__list__item">{item.name}</a>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Header;
