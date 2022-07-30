import React, { useEffect } from "react";
import "../Home.css";

function Banner() {


  useEffect(() => {
    let slideIndex = 0;
    function showSlide() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlide, 4000); // Change image every 4 seconds
    }
    showSlide();
  }, []);
  //////////the js for slideshow///////
  // showSlide();

  // let slideIndex = 0;

  // function showSlide() {
  //   let i;
  //   let slides = document.getElementsByClassName("mySlides");
  //   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {
  //     slideIndex = 1;
  //   }
  //   slides[slideIndex - 1].style.display = "block";
  //   setTimeout(showSlide, 4000); // Change image every 4 seconds
  // }

  return (
    <div className="slideshow-container">
      <div className="mySlides fade">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51pTbx2f89L._SX1500_.jpg"
          alt=""
        />
      </div>

      <div className="mySlides fade">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51BNzDmnUqL._SX1500_.jpg"
          alt=""
        />
      </div>

      <div className="mySlides fade">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt=""
        />
      </div>

      <div className="mySlides fade">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
          alt=""
        />
      </div>

      <div className="mySlides fade">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
