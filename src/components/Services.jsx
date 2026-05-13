import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Music & Live Performance",
      description:
        "Professional gospel singing and live performances with soulful vocals and engaging stage presence.",
      icon: "🎵",
    },
    {
      title: "Drumming (Izzy Sticks)",
      description:
        "Expert drumming services with my signature brand Izzy Sticks, bringing rhythm and energy to any event.",
      icon: "🥁",
    },
    {
      title: "Graphic Design",
      description:
        "Creative graphic design solutions including logos, branding, posters, and visual communications.",
      icon: "🎨",
    },
    {
      title: "Animation",
      description:
        "Professional animation services for videos, advertisements, and digital content creation.",
      icon: "🎬",
    },
    {
      title: "Video Editing",
      description:
        "High-quality video editing, post-production, and content creation for various media platforms.",
      icon: "✂️",
    },
    {
      title: "Web Development",
      description:
        "Modern, responsive website development using the latest technologies and best practices.",
      icon: "💻",
    },
    {
      title: "Tech Training",
      description:
        "Comprehensive technology education and training programs for individuals and organizations.",
      icon: "📚",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
