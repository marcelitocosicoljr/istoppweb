import React from "react";
import LoginLayout from "components/layout/LoginLayout";
import VerifyAccountForm from "components/screens/ResetPassword/VerifyAccountForm";
import NewPasswordForm from "components/screens/ResetPassword/ResetPasswordForm";

const NewPasswordPage = () => {
  return (
    <LoginLayout>
      <NewPasswordForm />
    </LoginLayout>
  );
};

export default NewPasswordPage;
