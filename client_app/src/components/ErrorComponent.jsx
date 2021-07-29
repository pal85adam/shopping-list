import React from "react";
const ErrorComponent = ({ errMessage, errType }) => {
  // information-msg success-msg error-msg
  return (
    <div className={"msg-top " + errType}>
      <span></span>
      <p>
        Please check:
        <ul>
          {Object.keys(errMessage).map((errKey) => (
            <li key={errKey}>{errMessage[errKey]}</li>
          ))}
        </ul>
      </p>
    </div>
  );
};

export default ErrorComponent;
