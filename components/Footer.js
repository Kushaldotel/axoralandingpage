import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo gradId="logoGradFooter" />
        <nav className="footer-links" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#work">Case Studies</a>
          <a href="#process">Process</a>
          <a href="#reach">Reach Us</a>
        </nav>
        <p className="footer-copy">
          © {new Date().getFullYear()} Axora Automation Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
