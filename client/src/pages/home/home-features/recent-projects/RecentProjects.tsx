import "./RecentProjects.css";

export const RecentProjects = () => {
  return (
    <div className="recent-projects__section">
      <h1 className="title">Recent Projects</h1>
      <div className="project-list">
        <div className="recent-projects__card">
          <div className="recent-projects__card-header">data engineering</div>
          <img className="recent-projects__image" />
          <span>Covid-19 Socioeconomic Analysis</span>
        </div>
        <div className="recent-projects__card">
          <div className="recent-projects__card-header">error: not-found</div>
          <img className="recent-projects__image" />
          <span>Error: NOT-FOUND</span>
        </div>
      </div>
    </div>
  );
};
