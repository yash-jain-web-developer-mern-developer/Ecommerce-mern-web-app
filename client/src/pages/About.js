import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to NexaBlend! At NexaBlend, we're dedicated to revolutionizing the way you blend your digital experiences. Our journey began with a simple idea: to craft a platform that seamlessly blends creativity and functionality. Now, we offer NexaBlend, a powerful tool designed to harmonize your digital projects effortlessly. With NexaBlend, you can mix and merge ideas, designs, and functionalities with ease. Our vision is to redefine the digital landscape, blending innovation and user-friendliness in every interaction. Explore NexaBlend's versatile features, intuitive interface, and limitless possibilities to unlock your creative potential. Join us in shaping the future of digital creation - let's blend brilliance together! Questions or feedback? Reach out to us via our contact information. Thank you for choosing NexaBlend!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
