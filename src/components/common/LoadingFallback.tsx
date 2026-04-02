import React from "react";

const LoadingFallback: React.FC = () => {
  return (
    <div className="ak-loading-fallback">
      <div className="ak-loading-spinner"></div>
    </div>
  );
};

export default LoadingFallback;
