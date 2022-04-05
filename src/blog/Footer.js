import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-section">
            <h1>Personally Newsletter</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam
              aperiam, eos veniam culpa dolores quo?
            </p>
            <input
              type="text"
              id="fname"
              name="fname"
              className="email_input"
              placeholder="Email Address"
              required
            />
            <input type="submit" value="Submit" className="submit_email" />
          </div>
          <hr />
          <p className="page_create">
            copyright 2021 - Intopros Technologies Pvt. Ltd.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
