import React from "react";

import "./post-add-form.css";

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex ">
      <input
        type="text"
        placeholder="What do you think about?"
        className="from-control new-post-label"
      />
      <button type="Submit" className="btn btn-outline-secondary">
        Add
      </button>
    </form>
  );
};

export default PostAddForm;
