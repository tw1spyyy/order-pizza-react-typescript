import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="120" r="120" />
      <rect x="0" y="273" rx="12" ry="12" width="260" height="31" />
      <rect x="0" y="323" rx="12" ry="12" width="260" height="75" />
      <rect x="0" y="414" rx="7" ry="7" width="96" height="35" />
      <rect x="78" y="436" rx="0" ry="0" width="4" height="0" />
      <rect x="130" y="413" rx="24" ry="24" width="130" height="35" />
    </ContentLoader>
  );
};
