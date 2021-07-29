import React from "react";

const IntroSectionComponent = ({ isEmptyList }) => {
  return (
    <section className="page-title-section">
      {isEmptyList && (
        <img
          alt="shopping-list"
          src="assets/images/shopping-list-md.jpeg"
          ClassName=""
        />
      )}
      <h1>Shopping List</h1>
      {isEmptyList && (
        <p>
          An electronical shopping list that is easy to use. All you have to do
          is to hit the add button!
        </p>
      )}
    </section>
  );
};

export default IntroSectionComponent;
