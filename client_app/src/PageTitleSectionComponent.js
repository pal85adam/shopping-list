import React from "react";
import ImageComponent from "./ImageComponent";

const PageTitleSectionComponent = ({ isNoItems }) => {
  return (
    <section className="page-title-section">
      {isNoItems && (
        <ImageComponent
          imageAlt="shopping-list"
          imageSrc="assets/images/shopping-list.jpeg"
          imageClassName=""
        />
      )}
      <h1>Shopping List</h1>
      {isNoItems && (
        <p>
          An electronical shopping list that is easy to use. All you have to do
          is to hit the add button!
        </p>
      )}
    </section>
  );
};

export default PageTitleSectionComponent;
