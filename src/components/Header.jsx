import { SOCMED_ICONS } from "../db.js";
import SocialMedia from "./SocialMedia";

export default function Header() {
  return (
    <>
      <div id="header-container">
        <header>
          <div>
            <p>Mon - Fri: 8AM - 6PM</p>
          </div>
          <div className="socmed-icons">
            {SOCMED_ICONS &&
              SOCMED_ICONS.map((icon) => {
                return <SocialMedia key={icon.id} {...icon} />;
              })}
          </div>
        </header>
      </div>
    </>
  );
}
