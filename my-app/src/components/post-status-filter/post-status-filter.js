import React from "react";
import { Button } from "reactstrap";
import "./post-status-filter.css";

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button color="info" type="button">
        ALL
      </Button>

      <Button type="button" outline color="secondary">
        LIKE
      </Button>
    </div>
  );
};

export default PostStatusFilter;
