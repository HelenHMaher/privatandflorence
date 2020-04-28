import React from "react";

export const Welcome = () => {
  return (
    <section id="welcome" className="welcome">
      <div className="grid">
        <div className="title">
          <h1>Privat and Florence</h1>
          <p>August 21, 2021</p>
        </div>
        <div className="main-image">
          <figure id="main-image">
            <img
              id="image"
              src={require("../photos/engagementPhoto.jpg")}
              alt="Florence and Private on their engagement"
            />
          </figure>
        </div>
      </div>
      <div className="email">
        <form id="form" action="__">
          <input
            name="email"
            id="email"
            type="email"
            className="fill-in-blank"
            placeholder="enter your email receive updates"
            required
          />
          <input id="submit" type="submit" value="submit" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Welcome;
