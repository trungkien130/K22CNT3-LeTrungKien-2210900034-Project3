import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Single import

const LTK_Banner = ({ isModalOpen }) => {
  useEffect(() => {
    const carouselElement = document.getElementById("carouselExample");
    if (carouselElement && window.bootstrap && window.bootstrap.Carousel) {
      const carousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // 3 seconds
        ride: "carousel",
      });
    } else {
      console.error(
        "Bootstrap Carousel is not available. Ensure Bootstrap JS is loaded."
      );
    }
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://bizweb.dktcdn.net/100/447/374/themes/850381/assets/slide-img1.png?1741077516711"
            className="d-block w-100"
            alt="Banner 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://bizweb.dktcdn.net/100/447/374/themes/850381/assets/slide-img2.png?1741077516711"
            className="d-block w-100"
            alt="Banner 2"
          />
        </div>
      </div>

      <button
        className={`carousel-control-prev ${isModalOpen ? "d-none" : ""}`}
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className={`carousel-control-next ${isModalOpen ? "d-none" : ""}`}
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default LTK_Banner;
