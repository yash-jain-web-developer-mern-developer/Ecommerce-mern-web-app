import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>•We collect personal and non-personal information to provide and improve our services.</p>
          <p>•Your information is used for service delivery, enhancing user experience, and communication purposes.</p>
          <p>•We employ industry-standard security measures to safeguard your data.</p>
          <p>•Your information may be shared with trusted third parties for specific purposes outlined in this policy.</p>
          <p>•We use cookies and similar technologies for analytics and personalization, with options for user control.</p>
          <p>•You have the right to access, correct, or delete your personal information upon request.</p>
          <p>•This policy may be updated periodically, and users will be notified of any changes.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
