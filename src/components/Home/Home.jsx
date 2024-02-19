import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomeImage from "../../assets/images/homepage.png";
import MLS from "../../assets/images/MLS.svg";
import Social from "../../assets/images/Social.svg";
import Filters from "../../assets/images/Filters.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import codeQuality from "../../assets/images/CodeQuality.svg";
import { Switch } from "antd";
import Arrow from "../../assets/images/arrowPost.svg";
import check from "../../assets/images/Check.svg";
import Laptop from "../../assets/images/laptop.png";
import descriptionTcon from "../../assets/images/discription.svg";
import SocialIcon from "../../assets/images/socialHome.svg";
function Home() {
 
  return (
    <>
      <div className="Home-Section">
        <Header />
        <div className="Section1">
          <div className="gradient-section">
            <div className="Home-Title">
              <div className="col-md-4">
                <h3>
                  AI Generated <br />
                  Listing Descriptions & Social Posts
                </h3>
                <p>
                  Save hundreds of dollars and hours of time by never writing a
                  description again.
                </p>
                <button className="btn btn-primary trailBtn">
                  Free Trial Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Section2 container">
          <div className="Feature-Section">
            <div className="col-lg-8 m-auto">
              <div className="Testimonials">
                <span>Overview</span>
                <h3>Features & Benefits </h3>
                <div className="col-sm-10 col-lg-6 col-xl-5 m-auto">
                  <p>
                    Save time and money by never writing a listing description
                    from scratch again.
                  </p>
                </div>
              </div>
            </div>
            <div className="Features-card">
              <div className="card">
                <div className="card-body">
                  <img src={MLS} />
                  <div className="Title">
                    <h3>MLS Listing Descriptions</h3>
                    <p>
                      Provide basic information about your listing in a quick,
                      easy to use form,
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img src={Social} />
                  <div className="Title">
                    <h3>Social Posts</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <img src={Filters} />
                  <div className="Title">
                    <h3>Fliers & Handouts</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Section3 container">
          <div className="Pricing-section">
            <div className="Pricing-header">
              <span>Pricing</span>
              <h3>Simple,Transparent Pricing</h3>
              <div className="col-lg-5 m-auto">
                <p>
                  Never spend $30-50 on a single description or social post
                  again. We strive to be the most positive ROI purchase you’ll
                  ever make.
                </p>
              </div>
            </div>
            <div className="Switch-Section">
              <p style={{ color: "rgba(140, 140, 140, 1)" }}>Billed Yearly</p>
              <Switch defaultChecked/>
              <p>Billed Monthly</p>
            </div>
            <div className="priceing-card-section container">
              <div className="card">
                <div className="card-body pricing-Grid">
                  <div></div>
                  <div className="column1">
                    <div className="Heading">
                      <div className="Icon">
                        <img src={Arrow} />
                      </div>
                      <div className="Description">
                        <h3>Descriptions + Social Posts</h3>
                      </div>
                    </div>
                  </div>
                  <div className="Listing">
                    <div className="Items">
                      <div>
                        <img src={check} />
                      </div>
                      <p>25 Listings per month</p>
                    </div>
                    <div className="Items">
                      <div>
                        <img src={check} />
                      </div>
                      <p>25 Listings per month</p>
                    </div>
                    <div className="Items">
                      <div>
                        <img src={check} />
                      </div>
                      <p>25 Listings per month</p>
                    </div>
                  </div>
                  <div className="Register-Section">
                    <div className="Pricing">
                      <h4>$15</h4>
                      <span>Monthly</span>
                    </div>
                    <button className="btn btn-primary RegisterBtn">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body pricing-Grid">
                  <div></div>
                  <div className="column1">
                    <div className="Heading">
                      <div className="Icon">
                        <img src={descriptionTcon} />
                      </div>
                      <div className="Description">
                        <h3>Descriptions</h3>
                      </div>
                    </div>
                  </div>
                  <div className="Listing">
                    <div className="Items">
                      <div>
                        <img src={check} />
                      </div>
                      <p>25 Listings per month</p>
                    </div>
                    <div className="Items">
                      <div>
                        <img src={check} />
                      </div>
                      <p>25 Listings per month</p>
                    </div>
                    <div className="Items">
                      <div>
                        <img src={check} />
                      </div>
                      <p>25 Listings per month</p>
                    </div>
                  </div>
                  <div className="Register-Section">
                    <div className="Pricing">
                      <h4>$10</h4>
                      <span>Monthly</span>
                    </div>
                    <button className="btn btn-light RegisterBtn">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body pricing-Grid">
                  <div></div>
                  <div className="column1">
                    <div className="Heading">
                      <div className="Icon">
                        <img src={SocialIcon} />
                      </div>
                      <div className="Description">
                        <h3>Social Posts</h3>
                      </div>
                    </div>
                  </div>
                  <div className="Listing">
                    <div className="Items">
                      <div>
                        <img src={check} />
                      </div>
                      <p>25 Listings per month</p>
                    </div>
                    <div className="Items">
                      <div>
                        <img src={check} />
                      </div>
                      <p>25 Listings per month</p>
                    </div>
                    <div className="Items">
                      <div>
                        <img src={check} />
                      </div>
                      <p>25 Listings per month</p>
                    </div>
                  </div>
                  <div className="Register-Section">
                    <div className="Pricing">
                      <h4>$10</h4>
                      <span>Monthly</span>
                    </div>
                    <button className="btn btn-light RegisterBtn">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Section4 HowToWork">
          <div className=" Work-Slider">
            <div className="Testimonials">
              <span>Testimonials</span>
              <h3>What Our Customer Say</h3>
              <div className="col-10 col-sm-8 col-lg-3 m-auto">
                <p>
                  We’re proud to save time and save money for real estate
                  professionals from coast to coast.
                </p>
              </div>
            </div>
            <div className="Silder-scetion">
              <Swiper
                slidesPerView={3}
                autoplay={{
                  delay: 500,
                  disableOnInteraction: true,
                }}
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
export default Home;
