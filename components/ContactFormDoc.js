import { FORM_POST_URL_DOCTOR } from "../lib/constants";
import { useState, useRef } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import styles from "./ContactForm.module.css";
import Link from "next/link";

const ContactFormDoc = (props) => {
  const [form, setForm] = useState([]);
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(0);
  const formRef = useRef(null);
  const clicked = (event) => {
    event.preventDefault();
    if (formRef.current.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setSuccess(0)
    }

    setValidated(true);
    event.preventDefault();
    const data = { yourname: form.yourname, specialist: form.specialist, cases: form.cases, clinicname: form.clinicname, clinicaddress: form.clinicaddress, email: form.email, phone: form.phone };

    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    //const formElement = event.target;
    if (formRef.current.checkValidity()) {
      axios
        .post(FORM_POST_URL_DOCTOR, formData, { headers: { "Content-Type": "multipart/form-data" } })
        .then(function (response) {
          setForm({ yourname: "", specialist: "", cases: "", clinicname: "", clinicaddress: "", email: "", phone: "" });
          setSuccess(1);
          
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      setValidated(false);
    }
  };

  return (
    <Form ref={formRef} noValidate validated={validated} className={props.activate === 0 ? `${styles.formWrap} ${styles.show}` : `${styles.formWrap} ${styles.hidden}`}>
      <Form.Group className="mb-4">
        <Form.Label>Name<span>*</span></Form.Label>
        <Form.Control required className="form-control" type="text" name="form[yourname]" value={form.yourname || ""} onChange={(e) => setForm({ ...form, yourname: e.target.value })} />
        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>專業領域<span>*</span></Form.Label>
        <Form.Control as="select" required className="form-control" name="form[specialist]" value={form.specialist || ""} onChange={(e) => setForm({ ...form, specialist: e.target.value })}>
          <option value="">請選擇</option>
          <option value="General Practitioner">General Practitioner</option>
          <option value="Orthodontist">Orthodontist</option>
          <option value="Other specialist">Other specialist</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">請選擇一個專業領域</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Complete orthodontic cases<span>*</span></Form.Label>
        <Form.Control as="select" required className="form-control" name="form[cases]" value={form.cases || ""} onChange={(e) => setForm({ ...form, cases: e.target.value })}>
          <option value="">請選擇</option>
          <option value="1-10">1-10</option>
          <option value="11-20">11-20</option>
          <option value="21-30">21-30</option>
          <option value="31-50">31-50</option>
          <option value="50-100">50-100</option>
          <option value="above 100">above 100</option>
          <option value="None completed">None completed</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">Please choose your cases</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>院所名稱<span>*</span></Form.Label>
        <Form.Control required className="form-control" type="text" name="form[clinicname]" value={form.clinicname || ""} onChange={(e) => setForm({ ...form, clinicname: e.target.value })} />
        <Form.Control.Feedback type="invalid">請輸入您的院所名稱</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>院所地址<span>*</span></Form.Label>
        <Form.Control required className="form-control" type="text" name="form[clinicaddress]" value={form.clinicaddress || ""} onChange={(e) => setForm({ ...form, clinicaddress: e.target.value })} />
        <Form.Control.Feedback type="invalid">請輸入您的院所地址</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Email<span>*</span></Form.Label>
        <Form.Control required className="form-control" type="email" name="form[email]" value={form.email || ""} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <Form.Control.Feedback type="invalid">請輸入您的Email</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Phone Number<span>*</span></Form.Label>
        <Form.Control required className="form-control" type="text" name="form[phone]" value={form.phone || ""} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <Form.Control.Feedback type="invalid">Please fill in your phone number</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-4">
        <div>
          隱私權政策
          <Link target="_blank" href="https://www.straumann.com/clearcorrect/us/en/home/privacy-notice.html">
            <a target="_blank" href="https://www.straumann.com/clearcorrect/us/en/home/privacy-notice.html">請點我</a>
          </Link>
        </div>
      </Form.Group>
      <Form.Group  controlId="formBasicCheckbox">
        <Form.Check required type="checkbox" label="勾選此欄位，我已於提交個人資料前詳閱Straumann ClearCorrect隱私政策，並同意透過電子郵件、電話或我同意的其他方式接收Straumann ClearCorrect，其關係企業及合作夥伴提供的 Clearcorrect 產品資訊。這些資訊可能包含產品行銷內容、特殊優惠、有用的提示、以及向您請求關於使用ClearCorrect產品體驗或諮詢經驗的回饋。" />
      </Form.Group>

      <div className={styles.btnBlock}>
        <button className="btn" type="submit" onClick={clicked}>
          Send Message
        </button>
        <div className={success ? `${styles.success}` : `${styles.success} ${styles.hidden}`}>您的留言已送出成功，將有專人聯絡您</div>
      </div>
    </Form>
  );
};

export default ContactFormDoc;
