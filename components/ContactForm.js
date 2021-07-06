import { FORM_POST_URL } from "../lib/constants";
import { useState, useRef } from "react";
import axios from "axios";
import { Form, Row, Grid, FormCheck } from "react-bootstrap";
import styles from "./ContactForm.module.css";
import Identify from "../components/Identify";
import Link from "next/link";
import ContactFormDoc from "./ContactFormDoc";
import ContactFormUser from "./ContactFormUser";

export default function ContactForm() {
  const [form, setForm] = useState([]);
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState(0);
  const [activate, setActivate] = useState(null);
  const formRef = useRef(null);

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
      phone: form.phone,
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
          setForm({ yourname: "", youremail: "", phone: "", message: "" });
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
      <Identify clicked={(index) => setActivate(index)}></Identify>
      <div className={activate === null ? `${styles.formContainer} ${styles.none}` : `${styles.formContainer} ${styles.block}`}>
        <ContactFormDoc activate={activate}></ContactFormDoc>
        <ContactFormUser activate={activate}></ContactFormUser>
        {/* <Form ref={formRef} noValidate validated={validated} className={activate === 0 ? `${styles.formWrap} ${styles.show}` : `${styles.formWrap} ${styles.hidden}`}>
          <Form.Group className="mb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control required className="form-control" type="text" name="form[yourname]" value={form.yourname || ""} onChange={(e) => setForm({ ...form, yourname: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>專業領域</Form.Label>
            <Form.Control as="select" required className="form-control" name="form[message]" value={form.message || ""} onChange={(e) => setForm({ ...form, message: e.target.value })}>
              <option value="">請選擇</option>
              <option value="test">General Practitioner</option>
              <option value="testt">Orthodontist</option>
              <option value="test">Other specialist</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">請選擇一個專業領域</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Complete orthodontic cases</Form.Label>
            <Form.Control as="select" required className="form-control" name="form[message]" value={form.message || ""} onChange={(e) => setForm({ ...form, message: e.target.value })}>
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
            <Form.Label>院所名稱</Form.Label>
            <Form.Control required className="form-control" type="text" name="form[yourname]" value={form.yourname || ""} onChange={(e) => setForm({ ...form, yourname: e.target.value })} />
            <Form.Control.Feedback type="invalid">請輸入您的院所名稱</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>院所地址</Form.Label>
            <Form.Control required className="form-control" type="text" name="form[yourname]" value={form.yourname || ""} onChange={(e) => setForm({ ...form, yourname: e.target.value })} />
            <Form.Control.Feedback type="invalid">請輸入您的院所地址</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control required className="form-control" type="email" name="form[youremail]" value={form.youremail || ""} onChange={(e) => setForm({ ...form, youremail: e.target.value })} />
            <Form.Control.Feedback type="invalid">請輸入您的Email</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control required className="form-control" type="text" name="form[phone]" value={form.phone || ""} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please fill in your phone number</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-4">
            <div>
              隱私權政策
              <Link href="https://www.straumann.com/clearcorrect/us/en/home/privacy-notice.html">
                <a>請點我</a>
              </Link>
            </div>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="勾選此欄位，我已於提交個人資料前詳閱Straumann ClearCorrect隱私政策，並同意透過電子郵件、電話或我同意的其他方式接收Straumann ClearCorrect , 其關係企業及合作夥伴提供的 Clearcorrect 產品資訊。這些資訊可能包含產品行銷內容,特殊優惠,有用的提示,以及向您請求關於使用ClearCorrect產品體驗或諮詢經驗的回饋。" />
          </Form.Group>

          <div className={styles.btnBlock}>
            <button className="btn" type="submit" onClick={clicked}>
              Send Message
            </button>
          </div>
        </Form>

        <Form ref={formRef} noValidate validated={validated} className={activate === 1 ? `${styles.formWrap} ${styles.show}` : `${styles.formWrap} ${styles.hidden}`}>
          <Form.Group className="mb-4">
            <Form.Label>您希望獲得哪些ClearCorrect相關資訊？</Form.Label>
            <Form.Control as="select" required className="form-control" name="form[message]" value={form.message || ""} onChange={(e) => setForm({ ...form, message: e.target.value })}>
              <option value="">請選擇</option>
              <option value="test">了解ClearCorrect牙套</option>
              <option value="testt">尋找ClearCorrect醫師</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>請填寫您的姓名</Form.Label>
            <Form.Control required className="form-control" type="text" name="form[yourname]" value={form.yourname || ""} onChange={(e) => setForm({ ...form, yourname: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>電子信箱</Form.Label>
            <Form.Control required className="form-control" type="text" name="form[yourname]" value={form.yourname || ""} onChange={(e) => setForm({ ...form, yourname: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>居住區域(選填): 讓我們推薦給您ClearCorrect醫師</Form.Label>
            <Form.Control className="form-control" type="email" name="form[youremail]" value={form.youremail || ""} onChange={(e) => setForm({ ...form, youremail: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>聯絡電話</Form.Label>
            <Form.Control required className="form-control" type="text" name="form[phone]" value={form.phone || ""} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please fill in your phone number</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <p>
              隱私權政策：
              <Link href="https://www.straumann.com/clearcorrect/us/en/home/privacy-notice.html">
                <a>請點我</a>
              </Link>
            </p>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="勾選此欄位，我已於提交個人資料前詳閱Straumann ClearCorrect隱私政策，並同意透過電子郵件、電話或我同意的其他方式接收Straumann ClearCorrect , 其關係企業及合作夥伴提供的 Clearcorrect 產品資訊。這些資訊可能包含產品行銷內容,特殊優惠,有用的提示,以及向您請求關於使用ClearCorrect產品體驗或諮詢經驗的回饋。" />
            </Form.Group>
          </Form.Group>

          <Form.Group>
            <div className={styles.btnBlock}>
              <button className="btn" type="submit" onClick={clicked}>
                Send Message
              </button>
            </div>
          </Form.Group>
        </Form> */}
      </div>
    </>
  );
}
