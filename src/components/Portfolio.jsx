import React, { useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Gospel Album Cover",
      category: "design",
      image: "/GOSPEL-ABLUM-COVER.png",
    },
    {
      id: 2,
      title: "Music Video Edit",
      category: "video",
      image: "/LIVE-PERFOMANCE.mp4",
    },
    {
      id: 3,
      title: "Brand Website",
      category: "web",
      image: "/music.png",
    },
    {
      id: 4,
      title: "Live Performance Animation",
      category: "design",
      image: "/music.png",
    },
    {
      id: 5,
      title: "Tech Workshop Materials",
      category: "design",
      image: "/music.png",
    },
    {
      id: 6,
      title: "Concert Video",
      category: "video",
      image: "/concert-video.mp4",
    },
    {
      id: 7,
      title: "E-commerce Platform",
      category: "web",
      image: "/music.png",
    },
    {
      id: 8,
      title: "Music Production",
      category: "music",
      image: "/music-production.jpg",
    },
    {
      id: 9,
      title: "Social Media Graphics",
      category: "design",
      image: "/music.png",
    },
  ];

  const filters = [
    { key: "all", label: "All" },
    { key: "design", label: "Design" },
    { key: "music", label: "Music" },
    { key: "web", label: "Web" },
    { key: "video", label: "Video" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                {item.image.endsWith(".mp4") ? (
                  <video src={item.image} controls />
                ) : (
                  <img src={item.image} alt={item.title} />
                )}
                <div className="portfolio-overlay">
                  <h4>{item.title}</h4>
                  <span className="category">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
