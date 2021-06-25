import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.footer}>
        <div className={styles.widget}>
          <h2>
            <a href="#">
              ClearCorrect<span>Dental Clinic services</span>
            </a>
          </h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <div className={styles.socialList}>
            <li>
              <a className="social-icon" href="#">
                <span>
                  <i class="fab fa-facebook-f"></i>
                </span>
              </a>
            </li>
            <li>
              <a className="social-icon" href="#">
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
              </a>
            </li>
          </div>
        </div>

        <div className={styles.links}>
          <h2>Quick links</h2>

          <ul>
            <li>
              <a href="#">
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
                Home
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
                About
              </a>
            </li>

            <li>
              <a href="#">
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2>Have Questions?</h2>
          <ul>
            <li>
              <a href="#">
                <span>
                  <i class="fas fa-map"></i>
                </span>
                03 Fake St. Mountain View, San Francisco,
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i class="fas fa-phone"></i>
                </span>
                +2 392 3929 210
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyRight}>
        <p>Copyright &copy; 2021 All rights reserved | ClearCorrect</p>
      </div>
    </footer>
  );
}
