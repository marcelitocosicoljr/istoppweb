import React from "react";
import LoginLayout from "components/layout/LoginLayout";
import PasswordChangedSuccess from "components/screens/ResetPassword/PasswordChangedSuccess";

const PasswordChangePage = () => {
  return (
    <LoginLayout>
      <PasswordChangedSuccess />
    </LoginLayout>
  );
};

export default PasswordChangePage;
