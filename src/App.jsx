import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import HeaderBanner from "./components/HeaderBanner";
import Widgets from "./components/Widgets";
import Welcome from "./components/Welcome";
import SignupBanner from "./components/SignupBanner";
import Testimonials from "./components/Testimonials";
import SignupForm from "./components/SignupForm";
import ApplicantData from "./components/ApplicantData";
import Footer from "./components/Footer";
import "./css/main.css";

export default function App() {
  const lettersOnly = /^[a-zA-Z ]*$/;
  const blankSpace = /^\s+$/;
  const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const salaryFormat = /^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$/;

  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    birthDate: "",
    currentEmployed: "",
    industry: "",
    prevTitle: "",
    workExperience: "",
    skills: "",
    availability: "",
    expectedSalary: "",
    travel: "",
  });

  function isNotValidated(e, message) {
    e.preventDefault();
    const link = e.target;
    const parentElement = link.parentElement;
    const input = parentElement.children[1];
    const check = parentElement.children[2];
    const error = parentElement.children[3];

    check.classList.add("invalid");
    check.classList.remove("valid");
    input.classList.add("invalid");
    input.classList.remove("valid");
    error.classList.add("invalid");
    error.classList.remove("valid");
    error.textContent = message;
  }

  function isValidated(e) {
    e.preventDefault();
    const link = e.target;
    const parentElement = link.parentElement;
    const input = parentElement.children[1];
    const check = parentElement.children[2];
    const error = parentElement.children[3];

    check.classList.add("valid");
    check.classList.remove("invalid");
    input.classList.add("valid");
    input.classList.remove("invalid");
    error.classList.add("valid");
    error.classList.remove("invalid");
    error.textContent = "";
  }

  function handleChangeInput(e) {
    const { name, value } = e.target;

    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));

    // FIRST NAME INPUT
    if ((name === "firstName" && !value) || value.match(blankSpace)) {
      isNotValidated(e, "First name is required.");
      return false;

      // LAST NAME INPUT
    } else if ((name === "lastName" && !value) || value.match(blankSpace)) {
      isNotValidated(e, "Last name is required.");
      return false;

      // MIDDLE NAME INPUT
    } else if ((name === "middleName" && !value) || value.match(blankSpace)) {
      isNotValidated(e, "Middle name is required.");
      return false;

      // EMAIL INPUT
    } else if ((name === "email" && !value) || value.match(blankSpace)) {
      isNotValidated(e, "Email is required.");
      return false;
    } else if (name === "email" && !value.match(emailFormat)) {
      isNotValidated(e, "Invalid format.");
      return false;

      // PREVIOUS TITLE
    } else if ((name === "prevTitle" && !value) || value.match(blankSpace)) {
      isNotValidated(e, "Field is required.");
      return false;
    } else if (name === "prevTitle" && !value.match(lettersOnly)) {
      isNotValidated(e, "This field requires only letters (A-Z).");
      return false;

      // SKILLS
    } else if ((name === "skills" && !value) || value.match(blankSpace)) {
      isNotValidated(e, "Field is required.");
      return false;
    } else if (name === "skills" && !value.match(lettersOnly)) {
      isNotValidated(e, "This field requires only letters (A-Z).");
      return false;

      // SALARY
    } else if (
      (name === "expectedSalary" && !value) ||
      value.match(blankSpace)
    ) {
      isNotValidated(e, "Field is required.");
      return false;
    } else if (name === "expectedSalary" && !value.match(salaryFormat)) {
      isNotValidated(e, "This field peso currency format ex: 35,000).");
      return false;
    } else {
      isValidated(e);
      return true;
    }
  }

  return (
    <>
      <Header />
      <HeaderBanner />
      <Widgets />
      <Welcome />
      <SignupBanner />
      <Testimonials />
      <SignupForm
        onChange={handleChangeInput}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <ApplicantData input={userInput} />
      <Footer />
    </>
  );
}
