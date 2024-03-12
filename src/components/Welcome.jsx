import React from "react";
import recruitment from "../resources/images/agency2.jpg";

export default function Welcome() {
  return (
    <section id="welcome-container">
      {/* <div
        className="welcome-image"
        style={{ backgroundImage: `url(${recruitment})` }}
      /> */}
      <img src={recruitment} alt="image" />
      <div className="welcome-content">
        <div>
          <h1>Welcome to MPower</h1>
          <h4>Helping  Build Your Future!</h4>
        </div>
        <p>
          At MPower HR & Event Solutions, we understand that finding the right
          job can be a daunting task. That's why we're here to bridge the gap
          between employers and job seekers, providing personalized and
          comprehensive employment solutions tailored to your needs.
          <br />
          <br />
          With years of experience in the industry, our team of dedicated
          professionals is committed to connecting talented individuals with
          reputable companies across various sectors. Whether you're a recent
          graduate looking to kickstart your career or an experienced
          professional seeking new opportunities, we're here to support you
          every step of the way.
          <br />
          <br />
          Our mission is simple: to empower individuals to reach their full
          potential and to assist businesses in finding the perfect match for
          their team. We strive for excellence in everything we do, from
          understanding the unique requirements of our clients to offering
          guidance and support to job seekers throughout their journey.
          <br />
          <br />
          At MPower HR & Events Solutions, integrity, professionalism, and
          transparency are at the core of our values. We believe in building
          long-lasting relationships based on trust and mutual respect, ensuring
          that both employers and candidates receive the highest quality
          service.
          <br />
          <br />
          Join us today and let us help you build a brighter future. Whether
          you're looking for temporary assignments, permanent positions, or
          specialized roles, we're here to make your employment journey a
          success. Welcome to MPower HR & Event Solutions, where your career
          aspirations become reality.
        </p>
        <br />
        <br />
        <span>"Take your career to new heights… Be MPowered!"</span>
      </div>
      
    </section>
  );
}
