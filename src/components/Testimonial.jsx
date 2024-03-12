import quoteIcon from "../resources/icons/quotes.png";

export default function Testimonial({
  id,
  name,
  image,
  title,
  company,
  review,
  stars,
}) {
  return (
    <li>
      <img className="applicant-image" src={image} alt={name} />
      <div className="star-container">
        {stars &&
          stars.map((star, i) => {
            return <img key={i} src={star} alt="stars" />;
          })}
      </div>
      <p>
        <img
          className="start-quote-icon quote-icon"
          src={quoteIcon}
          alt="quote-icon"
        />
        {review}
        <img
          className="end-quote-icon quote-icon"
          src={quoteIcon}
          alt="quote-icon"
        />
      </p>
      <div>
        <h3>{name}</h3>
        <h4>
          {`${title} at`} <span>{company}</span>
        </h4>
      </div>
    </li>
  );
}
