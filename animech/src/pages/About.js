import React from "react";
import Layout from "../component/layout/layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "70%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">About us</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
