import React from "react";
const ErrorComponent = ({errMessage,errType}) => {
    console.log(errType);
  return (
    <div className="msg-top information-msg success-msg error-msg">
      <span></span>
      <p>{errMessage}</p>
    </div>
  );
};

export default ErrorComponent;
