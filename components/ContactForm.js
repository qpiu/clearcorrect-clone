import { useState } from "react";
import styles from "./ContactForm.module.css";
import Identify from "../components/Identify";
import ContactFormDoc from "./ContactFormDoc";
import ContactFormUser from "./ContactFormUser";

export default function ContactForm() {
  const [activate, setActivate] = useState(null);
  return (
    <>
      <Identify clicked={(index) => setActivate(index)}></Identify>
      <div className={activate === null ? `${styles.formContainer} ${styles.none}` : `${styles.formContainer} ${styles.block}`}>
        <ContactFormDoc activate={activate}></ContactFormDoc>
        <ContactFormUser activate={activate}></ContactFormUser>
      </div>
    </>
  );
}
