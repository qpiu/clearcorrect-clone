import React from "react";
import Image from "next";
import Link from "next/link";
import styles from "./Top.module.css";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "../lib/constants";

const Top = () => {
  return (
    <div className={styles.topWrap}>
      <div className={styles.top}>
        <div>
          <div>
            <Link href="/">
              <a>
                <img alt="ClearCorrect透明牙套的專家-透明，簡單，友善" src="/assets/logo.png" alt="me" width="300" />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex align-item-center">
          <li>
            <a target="_blank" className="social-icon square pink top" href={FACEBOOK_LINK}>
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
            </a>
          </li>
          <li>
            <a target="_blank" className="social-icon square pink top" href={INSTAGRAM_LINK}>
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
