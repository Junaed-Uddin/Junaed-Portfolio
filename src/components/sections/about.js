import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 1040px;

  .inner {
    display: grid;
    grid-template-columns: 5fr 2fr;
    grid-gap: 50px;
    justify-content:center;
    font-size: 20px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: 15px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
    li:hover {
      color:var(--green);
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['C', 'Tailwind', 'Bootstrap', 'HTML5', 'CSS', 'JavaScript', 'jQuery', ' React ', 'ES6', 'Firebase', 'Express', 'Node', 'MongoDB'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hello! I am Junaed, a computer science graduate from Ahsanullah University of Science & Technology. After graduation, I worked in 𝗜𝗧 𝗕𝗮𝗻𝗴𝗹𝗮 𝗟𝘁𝗱 <a href="https://www.itbangla.org/">IT Bangla Ltd.</a> as 𝗙𝗿𝗼𝗻𝘁 𝗘𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 for 8 months and also, have some working experience with the 𝗯𝗮𝗰𝗸𝗲𝗻𝗱 (𝗖𝗥𝗨𝗗 𝗼𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻𝘀) using 𝗦𝗽𝗿𝗶𝗻𝗴 𝗠𝗩𝗖 and 𝗢𝗿𝗮𝗰𝗹𝗲 𝗣𝗟/𝗦𝗤𝗟. One of my areas of interest was 𝗠𝗘𝗥𝗡 𝗦𝘁𝗮𝗰𝗸 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 and I always like to use my creativity, explore new technologies, create something new and count myself as a hard-working person. So, I have done several projects exploring this stack, and am very interested in working with this technology.
              I specialize in 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁, 𝗧𝗮𝗶𝗹𝘄𝗶𝗻𝗱 𝗖𝗦𝗦, and 𝗥𝗲𝗮𝗰𝘁 and am also well familiar with 𝗡𝗼𝗱𝗲, 𝗘𝘅𝗽𝗿𝗲𝘀𝘀, and 𝗠𝗼𝗻𝗴𝗼𝗗𝗕. Designed and developed web applications across multiple APIs, third-party integrations, and databases. My Skill Highlights are given below-
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
