import React from "react";
import PortfolioCard from "../PortfolioCard";
import HeadContent from "@/components/Elements/HeadContent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Portfolio = () => {
  const portfolios = [
        {
            title: "StepUp Projects",
            description: "StepUp Projects is a website profile for a website development and design service provider",
            image: "./images/portfolio/portfolio-card-2.png",
            stacks: [
              {
                name: "React",
                color: "#61dbfb"
              },
              {
                name: "Express",
                color: "#292929"
              },
              {
                name: "MongoDB",
                color: "#08ee69"
              },
            ]
        },
        {
            title: "Best Point",
            description: "Best Point is a web application that is similar to Yelp, this is for people who wants to find some good place",
            image: "./images/portfolio/portfolio-card-3.jpg",
            stacks: [
              {
                name: "EJS",
                color: "b4ca65"
              },
              {
                name: "Express",
                color: "292929"
              },
              {
                name: "MongoDB",
                color: "08ee69"
              },
              {
                name: "HERE Maps",
                color: "08ee69"
              },
            ]
            
        },
        {
            title: "Gustoro CoffeeShop",
            description: "Gustoro CoffeeShop is a website for coffee shop. There are some feature in this website like reservation, order for user, and CRUD Product for admin.",
            image: "./images/portfolio/portfolio-card-4.png",
            stacks: [
              {
                name: "PHP",
                color: "61dbfb"
              },
              {
                name: "MySQL",
                color: "292929"
              },
              {
                name: "Bootstrap",
                color: "08ee69"
              },
            ]
            
        },
    ]

  const responsive = {
    desktop: {
      breakpoint: { max : 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    // onMove means if dragging or swiping in progress.
    return <button className="hidden" />;
  };
  return (
    <>
      <HeadContent>Portfolio .</HeadContent>
      <Carousel
        swipeable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        dotListClass="custom-dot-list-style"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-20-px"
        customRightArrow={<CustomRightArrow />}
        containerClass="carousel-container"
        className="flex items-center justify-center px-2 mt-2"
      >
        {portfolios.map((portfolio, index) => (
            <PortfolioCard key={index} {...portfolio} ></PortfolioCard>
        ))}
      </Carousel>
    </>
  );
};

export default Portfolio;
