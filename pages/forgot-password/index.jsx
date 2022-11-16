import React from "react";
import LoginLayout from "components/layout/LoginLayout";
import ForgotPasswordForm from "components/screens/ResetPassword/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  return (
    <LoginLayout>
      <ForgotPasswordForm />
    </LoginLayout>
  );
};

export default ForgotPasswordPage;
