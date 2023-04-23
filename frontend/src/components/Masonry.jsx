import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import gallery from "./galleryImage";

const MasonryImage = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 5 }}>
      <Masonry gutter="1rem">
        {gallery.map((item, index) => (
          <img
            className="hover:scale-110"
            src={item}
            alt="tes"
            key={index}
            style={{ width: "100%", borderRadius: "10px", display: "block" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryImage;
