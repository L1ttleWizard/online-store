import React from "react";

export const Form = () => {
  return (
    <section className="form">
      <h2 className="form-subtitle">sign up and get free bags</h2>
      <p className="coffee-updates">Coffee Updates</p>
      <div className="form-flex">
        <input
          className="input"
          type="email"
          placeholder="customer@coffeestyle.io"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <button className="subscribe-button">subscribe</button>&gt;
      </div>
    </section>
  );
};
