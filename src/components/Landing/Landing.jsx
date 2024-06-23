import React from "react";

import "./Landing.css";
function Landing() {
  return (
    <div className="landing-container">
      <div>
        <h1 className="userinfo">Hi I'm Saleh Rezaei</h1>
      </div>
      <div>
        <h2 className="userjob">Frontend Developer</h2>
      </div>
      <div>
        <p className="userdetails">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          aspernatur, harum quidem illo veniam tenetur odio consequatur ducimus
          est delectus facere, libero vitae? Et commodi necessitatibus deserunt,
          quibusdam exercitationem nostrum?
        </p>
      </div>
      <div className="user-communication-links">
        <a href="#">Let's talk</a>
        <a href="#">Call Me</a>
      </div>
    </div>
  );
}

export default Landing;
