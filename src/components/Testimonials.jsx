import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Music Producer",
      content:
        "Oba Melody's drumming skills are exceptional. His energy and precision brought our gospel album to life. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Tech Startup CEO",
      content:
        "The website Oba developed for our company exceeded all expectations. Professional, responsive, and beautifully designed.",
      rating: 5,
    },
    {
      name: "Grace Adebayo",
      role: "Event Organizer",
      content:
        "Hired Oba for our church anniversary concert. His performance was outstanding and the video editing of the event was spectacular.",
      rating: 5,
    },
    {
      name: "David Williams",
      role: "Design Agency Owner",
      content:
        "Oba's graphic design work is top-notch. His creative vision and attention to detail make him stand out in the industry.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
