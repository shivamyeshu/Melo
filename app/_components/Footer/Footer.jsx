// components/Footer.js
import Link from "next/link";
import { FaFacebook,
           FaTwitter,
           FaInstagram,
           FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footerContent}>
        {/* Logo and Description */}
        <div style={styles.section}>
          <h2 style={styles.logo}>Melo</h2>
          <p style={styles.description}>
            Short for <b>Melody</b> indicating harmony in syntax and usablity.
          </p>
        </div>

        {/* Navigation Links */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <ul style={styles.linksList}>
          <li>
        <Link href="/about" style={styles.link}>About</Link>
                </li>
                {/* <li>
                <Link href="/services" style={styles.link}>Services</Link>
                </li> */}
                <li>
                <Link href="/blog" style={styles.link}>Blog</Link>
                </li>
                <li>
                <Link href="/contact" style={styles.link}>Contact</Link>
                </li>

          </ul>
        </div>

        {/* Social Media Links */}
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Connect with Us</h3>
          <div style={styles.socialIcons}>
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaFacebook />
            </a> */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/Shivam-yeshu" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FaLinkedin />
            </a>

          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Melo | All rights reserved.</p>
      </div>
    </footer>
  );
};

// Basic styling for the footer
const styles = {
  footerContainer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "2rem",
    textAlign: "center",
  },
  footerContent: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  section: {
    flex: "1 1 300px",
    margin: "1rem",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  description: {
    margin: "0.5rem 0",
  },
  sectionTitle: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  linksList: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    margin: "0.5rem 0",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
  },
  icon: {
    color: "#fff",
    fontSize: "1.5rem",
    transition: "color 0.3s",
  },
  footerBottom: {
    borderTop: "1px solid #444",
    padding: "1rem",
    marginTop: "1rem",
    fontSize: "0.9rem",
  },
};

export default Footer;
