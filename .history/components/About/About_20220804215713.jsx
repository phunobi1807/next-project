import React from "react";
import { Container, Row } from "reactstrap";
import Image from "next/image";
import imgAbout from "../../assets/images/about-us.jpg";

const About = () => {
  return (
    <>
      <Container>
        <div className="row">
            <div className="col-lg-6">
                <Image src={imgAbout} alt="imgAbout" width={555} height={369.55} />
            </div>
        <div className="content">
          <h3>Creative Idea, Robust Design and Development Solutions.</h3>
          <p>
            We provide a complete range of web services including, website
            development, domain registration, website maintenance, website
            integration, search engine optimization, content marketing, and
            search marketing optimization.
          </p>
          <p>
            At a high level, digital marketing refers to advertising delivered
            through digital channels such as search engines, websites, social
            media, email, and mobile apps. Using these online media channels,
            digital marketing is the method by which companies endorse goods,
            services, and brands.
          </p>
        </div>
        </div>
      </Container>
    </>
  );
};

export default About;
