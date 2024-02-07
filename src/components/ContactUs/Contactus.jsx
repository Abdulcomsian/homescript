import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "swiper/css";
import "swiper/swiper-bundle.css";

import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import codeQuality from "../../assets/images/CodeQuality.svg";

function ContactUs() {
  return (
    <>
      <div>
        <Header />
        <div className="Main-Contact">
          <div className="container">
            <div className="contact-title">
              <p>Get In touch</p>
              <h3>Contact Us</h3>
              <h5>
                Have a question about pricing, partnerships, or something else?
                Please use the form below and we’ll be in touch quickly.
              </h5>
            </div>
            <div className="contact-form-section">
              <form>
                <div className="contact-grid-section">
                  <div className="">
                    <input
                      type="text"
                      class="form-control input"
                      placeholder="Name"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      class="form-control input"
                      placeholder="Compnay Name"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      class="form-control input"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      class="form-control input"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="text-section">
                    <textarea
                      type="text"
                      class="form-control input"
                      placeholder="Message"
                      rows={6}
                    />
                  </div>
                </div>
                <div className="contact-button">
                  <div class="form-check Agree-section">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      By submitting this, you agree to the&nbsp;&nbsp;
                      <Link>Privacy Policy</Link>&nbsp; and &nbsp;
                      <Link>Cookie Policy</Link>
                    </label>
                  </div>
                  <div className="Button">
                    <button className="btn btn-primary">Submit Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="Slide">
            <div className="container">
              <div className="contact-title">
                <p>Testimonials</p>
                <h3>What Our Customer Say</h3>
                <h5>
                  We’re proud to save time and save money for real estate
                  professionals from coast to coast.
                </h5>
              </div>
            </div>
            <div className="Silder-scetion">
              <Swiper
                slidesPerView={3}
                autoplay={{ delay: 3000 }}
                spaceBetween={50}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
                breakpoints={{
                  // when window width is >= 768px
                  991: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <div className="Icon">
                        <span>
                          <img src={codeQuality} />
                        </span>
                      </div>
                      <div className="Description">
                        <h3>Code Quality</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          <span className="text-dark">Joe</span>- Administrator
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <div className="Icon">
                        <span>
                          <img src={codeQuality} />
                        </span>
                      </div>
                      <div className="Description">
                        <h3>Code Quality</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          <span className="text-dark">Joe</span>- Administrator
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <div className="Icon">
                        <span>
                          <img src={codeQuality} />
                        </span>
                      </div>
                      <div className="Description">
                        <h3>Code Quality</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          <span className="text-dark">Joe</span>- Administrator
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <div className="Icon">
                        <span>
                          <img src={codeQuality} />
                        </span>
                      </div>
                      <div className="Description">
                        <h3>Code Quality</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          <span className="text-dark">Joe</span>- Administrator
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <div className="Icon">
                        <span>
                          <img src={codeQuality} />
                        </span>
                      </div>
                      <div className="Description">
                        <h3>Code Quality</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p>
                          <span className="text-dark">Joe</span>- Administrator
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
