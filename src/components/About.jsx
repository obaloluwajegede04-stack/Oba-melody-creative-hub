import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm <strong>Oba Melody</strong>, a passionate multi-talented
              creative professional based in Nigeria. With over a decade of
              experience in the creative industry, I bring together music,
              technology, and design to create compelling digital experiences.
            </p>
            <p>
              As a gospel singer, drummer, graphic designer, animator, video
              editor, web developer, and tech instructor, I combine technical
              expertise with artistic vision to deliver exceptional results
              across multiple disciplines.
            </p>
            <p>
              My journey in the creative world has been driven by a relentless
              pursuit of excellence and innovation. Whether I'm crafting
              beautiful websites, producing music, or teaching the next
              generation of tech enthusiasts, I approach every project with
              dedication and creativity.
            </p>
          </div>
          <div className="about-skills">
            <div className="skill-category">
              <h3>Music & Performance</h3>
              <ul>
                <li>Gospel Singing</li>
                <li>Drumming (Izzy Sticks)</li>
                <li>Live Performance</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Design & Media</h3>
              <ul>
                <li>Graphic Design</li>
                <li>Animation</li>
                <li>Video Editing</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Technology</h3>
              <ul>
                <li>Web Development</li>
                <li>Tech Education</li>
                <li>Digital Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
