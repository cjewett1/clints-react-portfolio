import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardMedia from "@mui/material/CardMedia";
import ReactLogo from "/public/static/ReactLogo.svg";
import StrapiLogo from "/public/static/StrapiLogo.svg";
import TypeScriptLogo from "/public/static/TypeScriptLogo.svg";
import JavaScriptLogo from "/public/static/JavaScriptLogo.svg";
import WordPressLogo from "/public/static/WordPressLogo.svg";
import SassLogo from "/public/static/SassLogo.svg";

export default function AboutMe() {
  return (
    <section className="about-me-paragraph">
      <div className="flex-container">
        <div>
          <CardMedia
            className="clint-image"
            component="img"
            image="images/Clint.png"
            title="Contemplative Reptile"
          />
        </div>
        <div>
          <p style={{ padding: "2rem 0rem" }}>
            Hi there! My name is Clinton Gorda and I just want to share a little
            bit about myself regarding previous work experience and the skills I
            have gained over the years. If you have any questions, don't
            hesitate! I would love to answer them as best as I can.
          </p>
          <p>
            Entering my 12th year as a plumber and deeply unhappy with where I
            was, I decided to retake control of my life and pivot to a more
            sustainable and fulfilling career path. With a little trial and
            error, I discovered my love for Web Design and Development. While i
            am happy that plumbing chapter of my career is now closed, I have
            gained many valuable lessons and gained numerous skills throughout
            the years that I will carry with me for the rest of my professional
            career.I love to create and design things. I want to create things
            that are easy to navigate. I focus on layouts that are simple yet
            effective.
          </p>

          <p style={{ padding: "2rem 0rem" }}>
            Fast forward to today. I am dedicated Web Developer with a hunger to
            never stop learning and build upon my knowledge base. While, I have
            a lot to learn, I have come so far in the past 3 years of the
            journey. I am excited to see where I end up next.{" "}
          </p>

          <p>Link to my GitHub</p>
          <p>Link to my CV</p>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-outer">
          <div className="skills">
            <ul>
              <li>
                <ReactLogo />
                <p>React</p>
              </li>
              <li>
                <TypeScriptLogo />
                <p>Material UI</p>
              </li>
              <li>
                <div>
                  <JavaScriptLogo />
                  <p>JavaScript</p>
                </div>
              </li>
              <li>
                <SassLogo />
                <p>Sass</p>
              </li>
              <li>
                <StrapiLogo />
                <p>Strapi</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
