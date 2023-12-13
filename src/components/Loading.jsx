import React from "react";
import ContentLoader from "react-content-loader";
const Loading = () => {
  const loaderItem = Array.from({ length: 8 }, (_, index) => (
    <div key={index}>
      <ContentLoader
        className="w-full"
        height={300}
        viewBox="0 0 450 400"
        backgroundColor="#a1a1a1"
        foregroundColor="#f0f0f0"
      >
        <rect x="42" y="77" rx="10" ry="10" width="300" height="217" />
        <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
        <rect x="43" y="304" rx="4" ry="4" width="270" height="9" />
      </ContentLoader>
    </div>
  ));
  return <>{loaderItem}</>;
};

export default Loading;
