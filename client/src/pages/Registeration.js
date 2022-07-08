import React from "react";
import RegisterForm from "../component/RegisterForm";

import MainLayout from "../layout/MainLayout";

const Registeration = () => {
  return (
    <MainLayout>
      <div className="reg-form">
        <RegisterForm />
      </div>
    </MainLayout>
  );
};

export default Registeration;
