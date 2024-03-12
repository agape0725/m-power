import React from "react";
import companyBackground from "../resources/images/agency5.jpg";

export default function HeaderBanner() {
  return (
    <section
      id="header-banner"
      style={{ backgroundImage: `url(${companyBackground})` }}
    >
      <div className="header-container">
        <div className="header-container-content">
          <div>
            <h1>LOGO</h1>
            <h3>HR and Events Solutions</h3>
          </div>
          <p>Connecting people with the right talent and job opportunities</p>
          <p>"Where people are our truly most valuable asset"</p>
        </div>
        <div>
          <button>APPLY NOW</button>
        </div>
      </div>
    </section>
  );
}
