import WebDevelopmentIcon from "/public/static/WebDevelopmentIcon.svg";
import WebDesignIcon from "/public/static/WebDesignIcon.svg";
import GraphicDesignIcon from "/public/static/GraphicDesignIcon.svg";

export default function WhatDo() {
  return (
    <section className="what-do-container">
      <h1>What I do</h1>
      <div className="what-do-flex-container">
        <div className="development">
          <WebDevelopmentIcon />
          <h3>Web Development</h3>
          <p>
            Throughout the Web Development and Design program I have done a
            number of coding projects and have really started to hone my skills
            as a developer. Though I have a long way to go, I am excited for
            where the future may take me in this industry and I hope to continue
            to develop my skills.
          </p>
        </div>

        <div className="design">
          <WebDesignIcon />
          <h3>Web Design</h3>
          <p>
            As a web designer, I lean heavily towards UX/UI. I love creating
            simple yet intuitive layouts that users. I love using webpages as a
            way to communicate with the users that visit my sites. My message is
            simple, as are my layouts, I tend to focus on what the user needs.
          </p>
        </div>

        <div className="graphic-design">
          <GraphicDesignIcon />
          <h3>Graphic Design</h3>
          <p>
            Graphic design is a big part of why I fell in love with this career
            path. I love creating things and playing around with the incredible
            tools offered within programs such as PhotoShop, Illustrator,
            InDesign and Figma. The possibilities are endless.
          </p>
        </div>
      </div>
    </section>
  );
}
