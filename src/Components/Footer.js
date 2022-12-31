const Footer = () => {
  return (
    <footer id="footer">
      <div class="container">
        <div class="social-links">
          <a
            href="https://www.instagram.com/nehal_borole/"
            class="instagram"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="https://github.com/nehalb123" class="google-plus">
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nehal-borole/"
            class="linkedin"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <a href="mailto:nehal.borole@gmail.com">
            <i class="bx bx-envelope"></i>
          </a>
        </div>
        <div class="credits" style={{ color: "#74808a" }}>
          Made with <span style={{ color: "#e25555" }}>&hearts;</span> using
          React
        </div>
      </div>
    </footer>
  );
};

export default Footer;
