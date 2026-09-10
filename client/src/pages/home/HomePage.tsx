import { RecentProjects } from "./home-features";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome</h1>
      <div>
        <RecentProjects />
      </div>
    </div>
  );
};
