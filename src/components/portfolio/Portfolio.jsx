import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "QKart",
    img: "./qkart.png",
    description:
      "QKart, an E-commerce marvel, offers a diverse product range, meticulously crafted for customer delight. I implemented core features like authentication, shopping cart, and checkout. Responsive design elements ensure seamless browsing. Utilizing REST APIs, real-time data is fetched. Deployed on Netlify/Vercel, it exemplifies my commitment to user-centric digital solutions.",
    skills:
      "React.js, Event Handling, Forms, React Hooks, REST API, Error Handling",
    link: "https://qkart-frontend-theta.vercel.app/",
  },
  {
    id: 2,
    title: "QTrip",
    img: "./qtrip.png",
    description:
      "QTrip, a travel website, caters to adventurers seeking diverse experiences in various cities. I crafted dynamic web pages using HTML, CSS, and JavaScript, enhancing UX with multi-select filters and image carousels. Leveraging localStorage for user preferences and fetch API for form submissions, I ensured seamless interactions. Deployment on Netlify/Vercel and Render showcases my commitment to delivering top-notch digital experiences.",
    skills:
      "HTML, CSS, JS, Bootstrap, REST APIs, JSON, DOM Manipulation, cURL",
    link: "https://qtrip-dynamicsam6-frontend.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>
              <span>Skills Used:</span> {item.skills}
            </p>
            <button>
              <a href={item.link} target="_blank">
                See Demo
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
