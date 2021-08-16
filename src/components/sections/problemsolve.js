import React, { useEffect, useRef } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 10fr;
    grid-gap: 50px;
    justify-content:center;
    font-size: 20px;

    @media (max-width: 768px) {
      display: block;
    }
  }
  .text{
    color:blue;
  }
  .text:hover{
    color:var(--green);
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
  }
`;
// const StyledPic = styled.div`
//   position: relative;
//   max-width: 300px;

//   @media (max-width: 768px) {
//     margin: 50px auto 0;
//     width: 70%;
//   }

//   .wrapper {
//     ${({ theme }) => theme.mixins.boxShadow};
//     display: block;
//     position: relative;
//     width: 100%;
//     border-radius: var(--border-radius);
//     background-color: var(--green);

//     &:hover,
//     &:focus {
//       background: transparent;
//       outline: 0;

//       &:after {
//         top: 15px;
//         left: 15px;
//       }

//       .img {
//         filter: none;
//         mix-blend-mode: normal;
//       }
//     }

//     .img {
//       position: relative;
//       border-radius: var(--border-radius);
//       mix-blend-mode: multiply;
//       filter: grayscale(100%) contrast(1);
//       transition: var(--transition);
//     }

//     &:before,
//     &:after {
//       content: '';
//       display: block;
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       border-radius: var(--border-radius);
//       transition: var(--transition);
//     }

//     &:before {
//       top: 0;
//       left: 0;
//       background-color: var(--navy);
//       mix-blend-mode: screen;
//     }

//     &:after {
//       border: 2px solid var(--green);
//       top: 20px;
//       left: 20px;
//       z-index: -1;
//     }
//   }
// `;
 
const Problemsolve = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
  //           ...GatsbyImageSharpFluid_withWebp_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="problemsolve" ref={revealContainer}>
      <h2 className="numbered-heading">Problem Solving</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>I have been interested in problem-solving for a long time and I still like to think about specific problems. Some easy and medium section problems have been solved in Codeforce with <b className="text">C++</b>, &nbsp;<b className="text"> JavaScript</b>, and <b className="text">Python</b>. In most cases, <a href="https://www.hackerrank.com/junaed_uddin460"><b>Hackerrank</b></a>, <a href="https://leetcode.com/junaedMohammed/"><b>Leetcode</b></a>, and <a href="https://www.freecodecamp.org/junaed-uddin"><b>freeCodeCamp</b></a> are used for practice.</p>
          </div>

        </StyledText>

        {/* <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic> */}
      </div>
    </StyledAboutSection>
  );
};

export default Problemsolve;
