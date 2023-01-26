import {
  GrFacebookOption,
  GrInstagram,
  GrLinkedinOption,
} from "react-icons/gr";

export const Logo = ({ w, h }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0H0V40H16V0ZM40 0H24V40H40V0Z"
        fill="#6245EE"
        // fill ="primary"
      />
    </svg>
  );
};

export const navMenu = [
  {
    name: "home",
    path: "home",
  },
  {
    name: "portfolio",
    path: "portfolio",
  },
  {
    name: "skills",
    path: "skills",
  },
  {
    name: "about me",
    path: "about",
  },
  {
    name: "contact me",
    path: "contact",
  },
];

export const skillsData = [
  {
    id: 1,
    skill: "html / css / js",
    rate: "95%",
  },
  {
    id: 2,
    skill: "sass / bootstrap / tailwind",
    rate: "85%",
  },
  {
    id: 3,
    skill: "react js / next js",
    rate: "80%",
  },
  {
    id: 4,
    skill: "material ui  /reactstrap/ chakra ",
    rate: "80%",
  },
  {
    id: 5,
    skill: "ui ux design",
    rate: "75%",
  },
  {
    id: 6,
    skill: "bash / npm / git",
    rate: "70%",
  },
];

export const contactData = [
  {
    name: "facebook",
    icon: GrFacebookOption,
    link: "https://web.facebook.com/",
  },
  {
    name: "instagram",
    icon: GrInstagram,
    link: "https://www.instagram.com/",
  },
  {
    name: "linkedin",
    icon: GrLinkedinOption,
    link: "https://www.linkedin.com/",
  },
];
