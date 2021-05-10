import React from "react";

import "./post-add-form.css";
import { Button } from "reactstrap";

const PostAddForm = ({ onAdd }) => {
  return (
    <div className="bottom-panel d-flex ">
      <input
        type="text"
        placeholder="What do you think about?"
        className="from-control new-post-label"
      />
      <Button
        type="Submit"
        outline
        color="secondary"
        onClick={() => onAdd("Hello")}
      >
        Add
      </Button>
    </div>
  );
};

export default PostAddForm;
