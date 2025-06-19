import React from "react";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: <>LinkedIn</>,
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: <>GitHub</>,
      href: "https://github.com/sambabhouria",
    },
    {
      id: 3,
      child: <>Mail</>,
      href: "mailto:sambabhouria@gmail.com",
    },
    {
      id: 4,
      child: <>Resume</>,
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-center items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
