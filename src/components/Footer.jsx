import SocialMedia from "./SocialMedia";
import backgroundImage from "../resources/images/building.jpg";
import logo from "../resources/logo/logo1.png";
import { SOCMED_ICONS } from "../db.js";

export default function Footer() {
  return (
    <section
      id="footer-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut qui
          ratione totam alias consequuntur quasi eius veniam impedit voluptates,
          quam cupiditate non. Esse temporibus, enim tenetur corrupti dolores
          dolore eius sit ullam sint autem, quidem nihil omnis maiores itaque?
          Expedita.
        </p>
        <ul className="socmed-container">
          {SOCMED_ICONS &&
            SOCMED_ICONS.map((icon) => {
              return <SocialMedia key={icon.id} {...icon} />;
            })}
        </ul>
      </div>

      <ul>
        <h1>Contact us</h1>
        <li>
          Office Address: Unit 25M, The Eastwood Le Grand II, Union Street,
          Eastwood Expansion, Eastwood City, Brgy. Bagumbayan, Quezon City, 1110
        </li>
        <li>Email: info@mpower.com.ph</li>
        <li>Mobile number: +63 951 3023230</li>
      </ul>

      <ul>
        <h1>Company</h1>
        <li data="link">About us</li>
        <li data="link">News</li>
        <li data="link">Testimonials</li>
      </ul>
    </section>
  );
}
