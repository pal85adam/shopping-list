import React, { useState } from "react";

export default function CompletedItemsComponent({ completedItems }) {
  const [viewCompletedItems, setViewCompletedItems] = useState(false);

  return (
    <section className="controll-section">
      <div className="controlls">
        <button
          className="link"
          onClick={() => setViewCompletedItems(!viewCompletedItems)}
        >
          View completed items
        </button>
      </div>
      {/* completed items */}
      {viewCompletedItems &&
        completedItems.map((item, index) => (
          <div key={index}>{item["itemName"]}</div>
        ))}
    </section>
  );
}
