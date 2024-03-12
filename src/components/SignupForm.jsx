import { useState, useEffect } from "react";
import confirm from "../resources/icons/confirm.png";
import { DROPDOWN } from "../db.js";

export default function SignupForm({ onChange, userInput, setUserInput }) {
  const [dropDown, setDropDown] = useState({
    currentEmployed: 0,
    industry: 0,
    workExperience: 0,
    availability: 0,
    travel: 0,
  });

  function onClickSubmit(e) {
    const error = document.querySelectorAll(`.error-message`);

    error.forEach((err) => {
      if (
        userInput.firstName &&
        userInput.lastName &&
        userInput.middleName &&
        userInput.email &&
        userInput.birthDate &&
        userInput.currentEmployed &&
        userInput.industry &&
        userInput.prevTitle &&
        userInput.workExperience &&
        userInput.skills &&
        userInput.availability &&
        userInput.expectedSalary &&
        userInput.travel
      ) {
        console.log("all true");
      } else {
        err.classList.add("invalid");
      }
    });
  }

  return (
    <div className="signup-form-main-container">
      <h1>Hello,</h1>
      <h2>Get started by filling up this application form.</h2>
      <section id="signup-form-container">
        <div className="input-container">
          <label>First name</label>
          <input
            type="text"
            name="firstName"
            value={userInput.firstName}
            onChange={(e) => onChange(e)}
            required
          />
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">First name is required</p>
        </div>
        <div className="input-container">
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            value={userInput.lastName}
            onChange={(e) => onChange(e)}
          />
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Last name is required</p>
        </div>
        <div className="input-container">
          <label>Middle name</label>
          <input
            type="text"
            name="middleName"
            value={userInput.middleName}
            onChange={(e) => onChange(e)}
          />
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Middle name is required</p>
        </div>
        <div className="input-container">
          <label>Email Address</label>
          <input
            type="text"
            name="email"
            value={userInput.email}
            onChange={(e) => onChange(e)}
            placeholder="johndoe26@gmail.com"
          />
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Email is required</p>
        </div>
        <div className="input-container">
          <label>Date of Birth</label>
          <input
            type="date"
            name="birthDate"
            value={userInput.birthDate}
            onChange={(e) => onChange(e)}
          />
          <img
            className="check-icon date-check-icon"
            src={confirm}
            alt="check"
          />
          <p className="error-message">Birth date is required</p>
        </div>
        <div className="input-container">
          <label>Currently Employed</label>
          <select
            className="input-with-dropdown"
            type="text"
            name="currentEmployed"
            value={userInput.currentEmployed}
            dropdown={dropDown.currentEmployed}
            onChange={(e) => onChange(e)}
          >
            <option value="" disabled selected>
              -
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Field is required</p>
        </div>
        <div className="input-container">
          <label>Industry</label>
          <select
            className="input-with-dropdown"
            type="text"
            name="industry"
            value={userInput.industry}
            onChange={(e) => onChange(e)}
          >
            <option value="" disabled selected>
              -
            </option>
            <option value="customer-service">Customer Service</option>
            <option value="typing">Typing</option>
            <option value="book-keeping">Book Keeping</option>
            <option value="accounting">Accounting</option>
          </select>
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Field is required</p>
        </div>
        <div className="input-container">
          <label>Previous title</label>
          <input
            type="text"
            name="prevTitle"
            value={userInput.prevTitle}
            onChange={(e) => onChange(e)}
            placeholder="Software Engineer / Data Entry / Book keeper"
          />
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Field is required</p>
        </div>
        <div className="input-container">
          <label>No. of work experience</label>
          <select
            className="input-with-dropdown"
            type="text"
            name="workExperience"
            value={userInput.workExperience}
            onChange={(e) => onChange(e)}
            // onClick={(e) => onClickInputDropDown(e)}
          >
            <option value="" disabled selected>
              -
            </option>
            <option value="0-1-years">0-1 year</option>
            <option value="1-3-years">1-3 years</option>
            <option value="3-5-years">3-5 years</option>
            <option value="5-above-years">5 years & above</option>
          </select>
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Field is required</p>
        </div>
        <div className="input-container">
          <label>Skills</label>
          <input
            type="text"
            name="skills"
            value={userInput.skills}
            onChange={(e) => onChange(e)}
            placeholder="Customer Service / Video Editor / Sales Rep"
          />
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Field is required</p>
        </div>
        <div className="input-container">
          <label>Availability to start work</label>
          <select
            className="input-with-dropdown"
            type="text"
            name="availability"
            value={userInput.availability}
            onChange={(e) => onChange(e)}
          >
            <option value="" disabled selected>
              -
            </option>
            <option value="Immediately">Immediately</option>
            <option value="1-2-weeks">1-2 weeks</option>
            <option value="2-3-weeks">2-3 weeks</option>
            <option value="others">others</option>
          </select>
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Field is required</p>
        </div>
        <div className="input-container">
          <label>
            Expected Salary <span>(PHP per month)</span>
          </label>
          <input
            type="text"
            name="expectedSalary"
            value={userInput.expectedSalary}
            onChange={(e) => onChange(e)}
            placeholder="30,000"
          />
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Field is required</p>
        </div>
        <div className="input-container">
          <label>Willing to travel</label>
          <select
            className="input-with-dropdown"
            type="text"
            name="travel"
            onChange={(e) => onChange(e)}
          >
            <option value="" disabled selected>
              -
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <img className="check-icon" src={confirm} alt="check" />
          <p className="error-message">Field is required</p>
        </div>
      </section>
      <button onClick={(e) => onClickSubmit(e)}>Submit</button>
    </div>
  );
}
