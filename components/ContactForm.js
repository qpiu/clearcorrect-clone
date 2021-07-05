import { FORM_POST_URL } from "../lib/constants";
import { useState } from "react";
import axios from "axios";
import { Row, Col, Grid } from "react-bootstrap";
import styles from "./ContactForm.module.css";
import Identify from "../components/Identify";

export default function ContactForm() {
  const [form, setForm] = useState([]);

  const [user, setUser] = useState(0);
  const [activate, setActivate] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      yourname: form.yourname,
      youremail: form.youremail,
      subject: form.subject,
      message: form.message,
    };

    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    //const formElement = event.target;
    axios
      .post(FORM_POST_URL, formData, { headers: { "Content-Type": "multipart/form-data" } })
      .then(function (response) {
        //handle success
        setForm({ yourname: "", youremail: "", subject: "", message: "" });
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <>
      <Identify clicked={() => setActivate(1)}></Identify>
      <form className={activate ? `${styles.formWrap} ${styles.show}` : `${styles.formWrap} ${styles.hidden}`} onSubmit={handleSubmit}>
        <Row>
          <Col>
            <label htmlFor="name">Name</label>
            <input required className="form-control" id="name" type="text" name="form[yourname]" value={form.yourname || ""} onChange={(e) => setForm({ ...form, yourname: e.target.value })} />
          </Col>

          <Col>
            <label htmlFor="email">Email</label>
            <input required className="form-control" id="email" type="text" name="form[youremail]" value={form.youremail || ""} onChange={(e) => setForm({ ...form, youremail: e.target.value })} />
          </Col>

          <Col>
            <label htmlFor="subject">Subject</label>
            <input required className="form-control" id="subject" type="text" name="form[subject]" value={form.subject || ""} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
          </Col>
        </Row>

        <Row>
          <Col>
            <label htmlFor="message">Messsage</label>
            <textarea required className="form-control" id="message" name="form[message]" value={form.message || ""} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </Col>
        </Row>

        <div className={styles.btnBlock}>
          <button className="btn" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}
