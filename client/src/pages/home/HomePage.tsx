import { RecentProjects } from "./home-features";
import "./HomePage.css";

const SOCIAL_LINKS = [
  {
    label: "github/anthonycasarta",
    href: "https://github.com/your-username",
  },
  {
    label: "linkedin/anthonycasarta",
    href: "https://linkedin.com/in/your-profile",
  },
];
export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <h1 id="home-hero-title">Welcome</h1>

        <nav className="home-hero__socials" aria-label="Social media profiles">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </section>
      <div>
        <RecentProjects />
      </div>
    </div>
  );
};
