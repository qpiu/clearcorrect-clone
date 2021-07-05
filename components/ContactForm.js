import { FORM_POST_URL } from "../lib/constants";
import { useState, useRef } from "react";
import axios from "axios";
import { Form, Row, Col, Grid } from "react-bootstrap";
import styles from "./ContactForm.module.css";
import Identify from "../components/Identify";

export default function ContactForm() {
  const [form, setForm] = useState([]);
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState(0);
  const [activate, setActivate] = useState(0);
  const formRef = useRef(null)

  const clicked = (event) => {
    event.preventDefault();
    if (formRef.current.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
    if (formRef.current.checkValidity()) {
      axios
        .post(FORM_POST_URL, formData, { headers: { "Content-Type": "multipart/form-data" } })
        .then(function (response) {
          //handle success
          console.log(response);
          setForm({ yourname: "", youremail: "", subject: "", message: "" });
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      setSubmit(0);
      setValidated(false);
    }
  };

  return (
    <>
      <Identify clicked={() => setActivate(1)}></Identify>
      <Form ref={formRef} noValidate validated={validated} className={activate ? `${styles.formWrap} ${styles.show}` : `${styles.formWrap} ${styles.hidden}`}>
        <Row>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control required className="form-control" type="text" name="form[yourname]" value={form.yourname || ""} onChange={(e) => setForm({ ...form, yourname: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control required className="form-control" type="email" name="form[youremail]" value={form.youremail || ""} onChange={(e) => setForm({ ...form, youremail: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control required className="form-control" type="text" name="form[subject]" value={form.subject || ""} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group controlId="message">
            <Form.Label>Messsage</Form.Label>
            <Form.Control as="textarea" required className="form-control" name="form[message]" value={form.message || ""} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <div className={styles.btnBlock}>
          <button className="btn" type="submit" onClick={clicked}>
            Send Message
          </button>
        </div>
      </Form>
    </>
  );
}
