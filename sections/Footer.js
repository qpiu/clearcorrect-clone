import React from "react";
import { CONTACT_ADDRESS, CONTACT_PHONE, FACEBOOK_LINK, INSTAGRAM_LINK } from "../lib/constants";
import styles from "./Footer.module.css";
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <div className={styles.footer}>
        <div className={styles.widget}>
          <h2>
            <Link href="/">
              <a>
                ClearCorrect<span>Dental Clinic services</span>
              </a>
            </Link>
          </h2>
          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          <div className={styles.socialList}>
            <li>
              <a className="social-icon" href={FACEBOOK_LINK}>
                <span>
                  <i className="fab fa-facebook-f"></i>
                </span>
              </a>
            </li>
            <li>
              <a className="social-icon" href={INSTAGRAM_LINK}>
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </li>
          </div>
        </div>

        <div className={styles.links}>
          <h2>Quick links</h2>

          <ul>
            <li>
              <a href="/">
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
                Home
              </a>
            </li>
            <li>
              <a href="/whoweare">
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
                About
              </a>
            </li>

            <li>
              <a href="/contact">
                <span>
                  <i className="fas fa-arrow-right"></i>
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
                  <i className="fas fa-map"></i>
                </span>
                {CONTACT_ADDRESS}
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                {CONTACT_PHONE}
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
