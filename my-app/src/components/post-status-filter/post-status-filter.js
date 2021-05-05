import React from "react";

import "./post-status-filter.css";

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-info">
        ALL
      </button>
      <button type="button" className="btn btn-outline-secondary">
        LIKE
      </button>
    </div>
  );
};

export default PostStatusFilter;
