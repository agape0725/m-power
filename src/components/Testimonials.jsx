import { TESTIMONIALS } from "../db.js";
import Testimonial from "./Testimonial";
import quoteIcon from "../resources/icons/quotes.png";
import quoteIcon2 from "../resources/icons/quotes2.png";
import testimonialOverlay from "../resources/png/testimonial-overlay.png";

export default function Testimonials() {
  return (
    <div className="testimonial-main-container">
      <div
        className="quote-overlay"
        style={{ backgroundImage: `url(${quoteIcon})` }}
      />
      <h1>TESTIMONIALS</h1>
      <section id="testimonial-container">
        <ul>
          {TESTIMONIALS &&
            TESTIMONIALS.map((review) => {
              return <Testimonial key={review.id} {...review} />;
            })}
        </ul>
      </section>
    </div>
  );
}
