import React from "react";
import { CONTACT_ADDRESS, CONTACT_PHONE, FACEBOOK_LINK, INSTAGRAM_LINK, CONTACT_EMAIL } from "../lib/constants";
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
                ClearCorrect<span>追蹤我們</span>
              </a>
            </Link>
          </h2>
    
          <div className={styles.socialList}>
            <li>
              <a className="social-icon" target="_blank" href={FACEBOOK_LINK}>
                <span>
                  <i className="fab fa-facebook-f"></i>
                </span>
              </a>
            </li>
            <li>
              <a className="social-icon" target="_blank" href={INSTAGRAM_LINK}>
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </li>
          </div>
        </div>

        <div className={styles.links}>
          <h2>連結</h2>

          <ul>
            <li>
              <a href="/">
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
                首頁
              </a>
            </li>
            <li>
              <a href="/whoweare">
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
                關於我們
              </a>
            </li>

            <li>
              <a href="/contact">
                <span>
                  <i className="fas fa-arrow-right"></i>
                </span>
                聯絡我們
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h2>ClearCorrect相關問題，歡迎聯繫我們</h2>
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
              <a href="tel:02-8178-6167">
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                {CONTACT_PHONE}
              </a>
            </li>
            <li>
              <a href="mailto:twprovider@clearcorrect.com">
                <span>
                <i class="far fa-envelope"></i>
                </span>
                {CONTACT_EMAIL}
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
