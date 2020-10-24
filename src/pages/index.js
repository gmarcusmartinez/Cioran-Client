import "styles/main.global.scss";
import "styles/pages/Landing.scss";
import { useEffect } from "react";
import AuthCard from "components/Landing/AuthCard";
// import buildClient from "api/build-client";
import { useRouter } from "next/router";

const headerText = "Cioran";
const slogan =
  "Plan, track, and manage your agile and software development projects in Cioran. Customize your workflow, collaborate, and release greatsoftware.";

const LandingPage = ({ currentUser }) => {
  const router = useRouter();
  const redirectToDashboard = () => {
    if (currentUser) router.push("/dashboard/projects");
  };

  useEffect(() => {
    redirectToDashboard();
  }, []);

  return (
    <div className="landing-page">
      <div className="hero">
        <div className="hero__header">
          <h1 className="header-logo">{headerText}</h1>
          <h1 className="header-slogan">{slogan}</h1>
        </div>
        <div className="hero__display">
          <div className="hero__logo">{headerText}</div>
          <p className="hero__slogan">{slogan}</p>
        </div>
        <div className="hero__auth">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

// LandingPage.getInitialProps = async (context) => {
//   const client = buildClient(context);
//   const { data } = await client.get("/api/auth/currentuser");

//   return data;
// };

export default LandingPage;
