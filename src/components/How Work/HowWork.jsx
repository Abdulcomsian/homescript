import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import codeQuality from "../../assets/images/CodeQuality.svg";
import chatImage from "../../assets/images/chat.png";
import Tick from "../../assets/images/Tick.png";

function HowWork() {
  return (
    <>
      <div className="HowToWork">
        <Header />
        <div className="easiest-section">
          <div className="Title-Work">
            <div className="Des">
              <h3>
                The easiest way to save <span>time and money</span> when
                creating listing content
              </h3>
              <div className="col-md-9 m-auto">
                <p>
                  Input a few details on your listing and our AI technology
                  generates you human quality content for use in all your key
                  platforms and marketing pieces.
                </p>
              </div>
            </div>
          </div>
          <div className="Image-wrapper">
            <img src={chatImage} />
          </div>
        </div>
        <div className="Image-Bottom-Section">
          <div className="Media-Section">
            <div className="Detail-section">
              <div className="Icon">
                <img src={Tick} />
              </div>
              <div className="Description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="Detail-section">
              <div className="Icon">
                <img src={Tick} />
              </div>
              <div className="Description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="Detail-section">
              <div className="Icon">
                <img src={Tick} />
              </div>
              <div className="Description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="Detail-section">
              <div className="Icon">
                <img src={Tick} />
              </div>
              <div className="Description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Work-Slider">
          <div className="Testimonials">
            <span>Testimonials</span>
            <h3>What Our Customer Say</h3>
            <div className="col-sm-6 col-lg-3 m-auto">
              <p>
                We’re proud to save time and save money for real estate
                professionals from coast to coast.
              </p>
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

        <Footer />
      </div>
    </>
  );
}
export default HowWork;
