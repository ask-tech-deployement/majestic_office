import React from "react";
import "./About.css"; // Optional: You can add custom styling in this CSS file
import Collabs from "../Home/Collabs";
import Brands from "../Home/Brands";
import Image1 from "../../assets/banner/bg4.jpeg";

const About = () => {
  return (
    <>
      <section className="about-us-section py-40">
        <div className="container">
          {/* Hero Section */}
          <div className="row align-items-center mx-5 py-36 ">
            <div className="col-lg-6 my-4 mb-lg-0">
              <h5 className="font-weight-bold text-primary mb-3 flex-align-start">
                About <span className="text-dark">Majestic Office Inc</span>
              </h5>
              <h2 className="mb-3">
                Your trusted partner for workplace solutions since 2017.
              </h2>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src={Image1}
                alt="About Majestic Office Inc"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>
          <div className="p-10">
            <p className="text-dark">
              Welcome to Majestic Office, a Corporate supplier of Computer,
              Stationers and Housekeeping Product – your trusted source for
              premium-quality housekeeping supplies and stationery essentials.
              Established in 2010, Majestic Office supplier has grown to become
              a leading supplier to corporate clients across India, committed to
              supporting businesses and households with products that enhance
              cleanliness, organization, and productivity. Managed by a team of
              professionals with a combined experience of over 15 years,
              Majestic Office operates with a focus on providing swift and
              reliable service. Our central location allows us to cater
              efficiently to a broad client base.
            </p>
          </div>
          {/* Vision & Mission */}
          <div className="row gy-4 text-center my-36 ">
            {/* <div className="col-md-6">
              <div className="card">
                <h4 className="text-primary font-weight-bold mb-10">
                  Our Vision
                </h4>
                <p className="text-muted">
                  Worry-free administrators and <br />
                  facilities managers.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <h4 className="text-primary font-weight-bold mb-10">
                  Our Mission
                </h4>
                <p className="text-muted">
                  To provide honest, no-nonsense, timely, and consistent quality
                  supplies for workplace needs, enabling peace of mind.
                </p>
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="card">
                <h4 className="text-primary font-weight-bold mb-10">
                  Why Choose Majestic Office Inc?
                </h4>
                <p className="text-muted">
                  As a dedicated supplier, we build long-term partnerships by
                  delivering dependable, high-quality products at competitive
                  prices. We understand the unique needs of our clients and
                  offer personalized recommendations and support to ensure you
                  have exactly what you need, when you need it. Thank you for
                  choosing Majestic Office supplier as your supplier. We look
                  forward to supporting your efforts to maintain clean,
                  organized, and productive spaces.
                </p>
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="card">
                <h4 className="text-primary font-weight-bold mb-10">
                  Our Core Values
                </h4>
                <ul className="text-muted">
                  <li>Integrity towards quality</li>
                  <li>WYSIWYG – "What You Say is What You Get"</li>
                  <li>Honest and consistent supplies</li>
                  <li>Quick turnaround time for all orders</li>
                  <li>Nationwide reach with PAN India supplies</li>
                </ul>
              </div>
            </div> */}
          </div>

          {/* <div className="text-center mb-5 my-40">
            <h2 className="font-weight-bold text-primary mb-40">Our Team</h2>
            <div className="row gy-4 justify-content-center text-center">
              <div className="col-md-6">
                <h4 className=" font-weight-bold mb-20">Founder : ?</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  officiis omnis culpa maxime facilis dolore laborum saepe quasi
                  corporis, accusamus, ipsa excepturi dolorum eum expedita
                  mollitia numquam ipsum beatae animi?
                </p>
              </div>
              <div className="col-md-6">
                <h4 className=" font-weight-bold mb-20">CEO : ?</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  officiis omnis culpa maxime facilis dolore laborum saepe quasi
                  corporis, accusamus, ipsa excepturi dolorum eum expedita
                  mollitia numquam ipsum beatae animi?
                </p>
              </div>
            </div>
          </div> */}
          {/* Product Range */}
          <div className="text-center mt-40">
            <h2 className="font-weight-bold text-primary mb-40">
              Our Product Range
            </h2>
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="card">
                  <h4 className="text-dark mb-20">The Works (Stationery)</h4>
                  <p className="text-muted">
                    Papers, sticky notes, pens, printer cartridges, and more.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card">
                  <h4 className="text-dark mb-20">
                    Shine & Bright (Housekeeping)
                  </h4>
                  <p className="text-muted">
                    Cleaning chemicals, tissue products, and safety equipment.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="card">
                  <h4 className="text-dark mb-20">Eat & Drink (Pantry)</h4>
                  <p className="text-muted">
                    Cookies, energy bars, soft drinks, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="row text-center gy-4 mt-10 justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="p-40 bg-secondary text-white rounded shadow-sm">
                <h2 className="text-white">250+</h2>
                <p>Satisfied Clients</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="p-40 bg-secondary text-white rounded shadow-sm">
                <h2 className="text-white">8+</h2>
                <p>Years of Experience</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="p-40 bg-secondary text-white rounded shadow-sm">
                <h2 className="text-white">Pan India</h2>
                <p>Locations Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Collabs />
      <Brands />
    </>
  );
};

export default About;
