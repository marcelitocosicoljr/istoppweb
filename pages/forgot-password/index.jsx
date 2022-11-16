import React from "react";
import LoginLayout from "components/layout/LoginLayout";
import VerifyAccountForm from "components/screens/ResetPassword/VerifyAccountForm";

const VerifyAccountPage = () => {
  return (
    <LoginLayout>
      <VerifyAccountForm />
    </LoginLayout>
  );
};

export default VerifyAccountPage;
