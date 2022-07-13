import React from "react";
import { Login } from "../Components/Login/Login";
import { Layout } from "../Layout/Layout";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <Layout>
      <div className="landing-page bg-info">
        <Login />
      </div>
    </Layout>
  );
};
