import React from 'react'
import { Container } from 'reactstrap'
import Image from 'next/image'
import imgAbout from "../../assets/images/about-us.jpg"

const About = () => {
  return (
    <>
        <Container>
            <Image src={imgAbout} alt="imgAbout"  width={555} height={369.55}/>
            <div className="content">
                <h3>Creative Idea, Robust Design and Development Solutions.</h3>
                <p>We provide a complete range of web services including, website development, domain registration, website maintenance, website integration, search engine optimization, content marketing, and search marketing optimization.</p>
            </div>
        </Container>
    </>
  )
}

export default About