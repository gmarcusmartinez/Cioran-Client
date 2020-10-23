import Navigation from "../../components/Dashboard/Navigation";
import "../../styles/main.global.scss";
import "../../styles/pages/Dashboard.scss";

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard">
        <Navigation />
      </div>
    </div>
  );
};

export default DashboardPage;
