import { RecentProjects } from "./home-features";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div>
        <RecentProjects />
      </div>
    </div>
  );
};
