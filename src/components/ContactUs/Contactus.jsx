import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

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
                  <div>
                    <button className="btn btn-primary">Submit Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div>
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
            <div>
              <Swiper
                slidesPerView={3}
                spaceBetween={150}
                pagination={{
                  clickable: true,
                }}
              
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
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
