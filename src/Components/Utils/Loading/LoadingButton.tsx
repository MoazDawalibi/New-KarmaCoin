import React from "react";
import { Button, Spinner } from "reactstrap";

const LoadingButton = ({ isLoading = false, ...props }) => {
  return (
    <Button disabled={isLoading} {...props} className="loadingBUtton">
      {isLoading ? <Spinner style={{ marginRight: "10px" }} size="sm" /> : null}
      <span className="loadingspan" >{props.children}</span>
    </Button>
  );
};



export { LoadingButton };
