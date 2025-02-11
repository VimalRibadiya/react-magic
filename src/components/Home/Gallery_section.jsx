import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Gallery_section = () => {
  const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <>
      <div className="gallery-main">
        <div className="container">
          <div className="gallery-inner">
            <div className="gallery-title">
              <p>magical gallery</p>
              <h2>
                Step into the enchanting world of wonder <br /> through our
                collection of magical <br /> moments.
              </h2>
            </div>
            <div className="gallery-slider">
              <OwlCarousel
                className="owl-theme"
                {...options}
                autoplay
                autoplayTimeout={3000}
                autoplaySpeed={1000}
                loop
                margin={10}
                nav={true}
                navText={['<span><i class="fa-solid fa-angle-left"></i><span/>','<span><i class="fa-solid fa-angle-right"></i><span/>']}
                dots={false}
              >
                <div class="item">
                  <img src="/react-magic/assets/images/gallery1.png" alt="gallery1.png" />
                </div>
                <div class="item">
                  <img src="/react-magic/assets/images/gallery2.png" alt="gallery2.png" />
                </div>
                <div class="item">
                  <img src="/react-magic/assets/images/gallery3.png" alt="gallery3.png" />
                </div>
                <div class="item">
                  <img src="/react-magic/assets/images/gallery1.png" alt="gallery1.png" />
                </div>
                <div class="item">
                  <img src="/react-magic/assets/images/gallery2.png" alt="gallery2.png" />
                </div>
                <div class="item">
                  <img src="/react-magic/assets/images/gallery3.png" alt="gallery3.png" />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery_section;
