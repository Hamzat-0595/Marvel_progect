import React from "react";
import ContentLoader from "react-content-loader";

const Sceleton = ({ props }) => {
  return (
    <div className="SelectedCharacter">
      <h3 className="sceleton__title">
        Please select a character to see information
      </h3>
      <ContentLoader
        speed={1}
        width={380}
        height={244}
        viewBox="0 0 420 294"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="81" y="50" rx="3" ry="3" width="334" height="19" />
        <rect x="6" y="102" rx="3" ry="3" width="410" height="48" />
        <rect x="72" y="272" rx="3" ry="3" width="178" height="6" />
        <circle cx="33" cy="60" r="32" />
        <rect x="6" y="170" rx="3" ry="3" width="410" height="48" />
        <rect x="6" y="240" rx="3" ry="3" width="410" height="48" />
      </ContentLoader>
    </div>
  );
};

export default Sceleton;
