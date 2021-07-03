import React from "react";
import Image from "next";
import Link from "next/link";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <div className={styles.topWrap}>
      <div className={styles.top}>
        <div>
          <div>
            <Link href="/">
              <a>
                <img src="/assets/logo.png" alt="me" width="300" />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex align-item-center">
          <li>
            <a className="social-icon square pink top" href="#">
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
            </a>
          </li>
          <li>
            <a className="social-icon square pink top" href="#">
              <span>
                <i className="fab fa-instagram"></i>
              </span>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Top;
