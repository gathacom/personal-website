import React from "react";
import PortfolioCard from "../PortfolioCard";
import HeadContent from "@/components/Elements/HeadContent";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Portfolio = () => {
    const portfolios = [
        {
            title: "StepUp Projects",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus est atque eos corporis ipsum labore rerum odit ullam fugiat.",
            image: "./images/portfolio/portfolio-card-1.png"
            
        },
        {
            title: "E-commerce",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus est atque eos corporis ipsum labore rerum odit ullam fugiat.",
            image: "./images/portfolio/portfolio-card-1.png"
            
        },
        {
            title: "Blogging Site",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus est atque eos corporis ipsum labore rerum odit ullam fugiat.",
            image: "./images/portfolio/portfolio-card-1.png"
            
        },
        {
            title: "Music Website",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatibus est atque eos corporis ipsum labore rerum odit ullam fugiat.",
            image: "./images/portfolio/portfolio-card-1.png"
            
        },
    ]

  const responsive = {
    desktop: {
      breakpoint: { max : 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
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
        arrows={true}
        containerClass="carousel-container"
        className="flex items-center justify-center px-2 bg-foreground "
      >
        {portfolios.map((portfolio, index) => (
            <PortfolioCard key={index} {...portfolio} ></PortfolioCard>
        ))}
      </Carousel>
    </>
  );
};

export default Portfolio;
