import "./Footer.css";

const SOCIAL_LINKS = [
  {
    label: "github",
    href: "https://github.com/your-username",
  },
  {
    label: "linkedin",
    href: "https://linkedin.com/in/your-profile",
  },
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__heading">
        <span className="footer__label">connect / external</span>
        <h2>find me online</h2>
      </div>

      <nav className="footer__links" aria-label="Social media profiles">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            <span>{link.label}</span>
            <span className="footer__link-label" aria-hidden="true">
              external
            </span>
          </a>
        ))}
      </nav>
    </footer>
  );
};
