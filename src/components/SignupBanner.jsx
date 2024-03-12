import signup from "../resources/images/signup.jpg";

export default function SignupBanner() {
  return (
    <div className="signup-banner-main-container">
      <section
        id="signup-banner-container"
        style={{ backgroundImage: `url(${signup})` }}
      >
        <div>
          <h1>"Grow with us and take your career to the next level"</h1>
          <button>APPLY NOW</button>
        </div>
      </section>
    </div>
  );
}
