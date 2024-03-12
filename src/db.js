// Icons
import connectIcon from "./resources/icons/agreement.png";
import chooseUsIcon from "./resources/icons/choose-us.png";
import engageIcon from "./resources/icons/engage.png";
import resultIcon from "./resources/icons/results.png";

// Social Media Icon
import twitterIcon from "./resources/icons/twitter.png";
import facebookIcon from "./resources/icons/facebook.png";
import instagramIcon from "./resources/icons/instagram.png";

// Testimonials
import raileen from "./resources/images/raileen.png";
import raechelle from "./resources/images/raechelle.png";
import liszt from "./resources/images/liszt.png";
import fullStar from "./resources/icons/star.png";

export const SOCMED_ICONS = [
  {
    id: 1,
    alt: "facebook",
    icon: facebookIcon,
  },
  {
    id: 2,
    alt: "instagram",
    icon: instagramIcon,
  },
  {
    id: 3,
    alt: "twitter",
    icon: twitterIcon,
  },
];

export const WIDGETS = [
  {
    id: 1,
    image: resultIcon,
    title: "Success",
    content: `Our powerful recruitment and hiring solution is fine-tuned to deliver predictable, proven results of knowing exactly the right people to help our clients in their specific needs. We are built with the vision of providing experience-led manpower sourcing both locally and internationally.`,
    pre: "",
  },
  {
    id: 2,
    image: engageIcon,
    title: "Engage with experts",
    content: `We cater our remote hiring and recruitment with knowledge of the current market, client needs, job trends, and result driven by passion for hard work, excellence and commitment to deliver quality manpower sourcing.`,
    pre: "",
  },
  {
    id: 3,
    image: chooseUsIcon,
    title: "Why choose us?",
    content: `Because manpower sourcing and recruitment is the core of HR Management looking for extraordinary talent within our available search network services at reasonable cost.`,
    pre: "",
  },
  {
    id: 4,
    image: connectIcon,
    title: "Get in touch",
    content: `Our client have valued our executive search services for the wide reach that we offer. We invite you to get in touch with us. 
    `,
    pre: `"Where good conversation become great experiences."`,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Raileen Yamco",
    image: raileen,
    title: "Event Coordinator",
    company: "Corinium Global Intelligence",
    review: `The outstanding service provided by MPower HR and Events Solutions surpassed my expectations. This team stands out due to their extensive network of employers, professionalism, and individual approach. They gave me insightful advice, helped me find the ideal position, and expertly navigated the job search process. If you're looking for a great employment agency, I highly recommend them!`,
    stars: [[fullStar], [fullStar], [fullStar], [fullStar], [fullStar]],
  },
  {
    id: 2,
    name: "Raechelle Fabon",
    image: raechelle,
    title: "Conference Production Manager",
    company: "iStack Conferences",
    review: `Wayback 2012, I decided to quit my job as a Conference Coordinator in the Philippines and tried my luck in finding a similar role in Singapore. During that time, it wasn't as easy and straightforward to land a job as the timing was Christmas and New Year. One month has passed and I still wasn't able to sign a contract and was almost at the brink of giving up and just going back home. Thankfully, I stumbled upon MPower HR and Events  Solutions and was referred to my very first job in Singapore - they guided me every step of the way, provided tips on the interview process, and ensured a smooth onboarding for me. 

I am truly grateful for having found this agency, not only it helped me find a job that is the right fit for me and my work background/experience, but also it opened doors of enormous opportunities as I started my career in Singapore.`,
    stars: [[fullStar], [fullStar], [fullStar], [fullStar], [fullStar]],
  },
  {
    id: 3,
    name: "Liszt Serrano",
    image: liszt,
    title: "Meeting Manager",
    company: "Resurg Group",
    review: `I am immensely grateful to MPower HR and Events Solutions for playing a pivotal role in kickstarting my career in Sydney. After a two-year maternity leave in Perth, their extensive network efficiently connected me with an employer, facilitating a seamless transition. The impressive process and effective communication made the entire experience remarkable. I highly recommend MPower HR for their dedication and success in helping individuals like me re-enter the workforce.`,
    stars: [[fullStar], [fullStar], [fullStar], [fullStar], [fullStar]],
  },
];

export const DROPDOWN = [
  {
    currentEmployed: ["Yes", "No"],

    industry: ["Customer Service", "Typing", "Book keeping", "Accounting"],

    workExperience: ["0-1 year", "1-3 years", "3-5 years", "5 years & above"],

    availability: ["Immediately", "1-2 weeks", "2-3 weeks", "others"],

    travel: ["Yes", "No"],
  },
];
