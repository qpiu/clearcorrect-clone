import { FORM_POST_URL_PATIENT } from "../lib/constants";
import { useState, useRef } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import styles from "./ContactForm.module.css";
import Link from "next/link";

const ContactFormUser = (props) => {
  const [form, setForm] = useState([]);
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(0);
  const formRef = useRef(null);
  const clicked = (event) => {
    event.preventDefault();
    if (formRef.current.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setSuccess(0);
    }

    setValidated(true);
    event.preventDefault();
    const data = {
      yourname: form.yourname,
      youremail: form.youremail,
      yourphone: form.yourphone,
      info: form.info,
      yourarea: form.yourarea,
    };

    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }

    if (formRef.current.checkValidity()) {
      axios
        .post(FORM_POST_URL_PATIENT, formData, { headers: { "Content-Type": "multipart/form-data" } })
        .then(function (response) {
          //handle success
          console.log(response);
          setForm({ yourname: "", youremail: "", yourphone: "", info: "", yourarea: "" });
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      setValidated(false);
    }
  };

  return (
    <Form ref={formRef} noValidate validated={validated} className={props.activate === 1 ? `${styles.formWrap} ${styles.show}` : `${styles.formWrap} ${styles.hidden}`}>
      <Form.Group className="mb-4">
        <Form.Label>您希望獲得哪些ClearCorrect相關資訊？<span>*</span></Form.Label>
        <Form.Control as="select" required className="form-control" name="form[info]" value={form.info || ""} onChange={(e) => setForm({ ...form, info: e.target.value })}>
          <option value="">請選擇</option>
          <option value="了解ClearCorrect牙套">了解ClearCorrect牙套</option>
          <option value="尋找ClearCorrect醫師">尋找ClearCorrect醫師</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">Please choose your request.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>請填寫您的姓名<span>*</span></Form.Label>
        <Form.Control required className="form-control" type="text" name="form[yourname]" value={form.yourname || ""} onChange={(e) => setForm({ ...form, yourname: e.target.value })} />
        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>電子信箱<span>*</span></Form.Label>
        <Form.Control required className="form-control" type="email" name="form[youremail]" value={form.youremail || ""} onChange={(e) => setForm({ ...form, youremail: e.target.value })} />
        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>居住區域(選填): 讓我們推薦給您ClearCorrect醫師</Form.Label>
        <Form.Control className="form-control" type="text" name="form[yourarea]" value={form.yourarea || ""} onChange={(e) => setForm({ ...form, yourarea: e.target.value })} />
        <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>聯絡電話<span>*</span></Form.Label>
        <Form.Control required className="form-control" type="text" name="form[yourphone]" value={form.yourphone || ""} onChange={(e) => setForm({ ...form, yourphone: e.target.value })} />
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
          <Form.Check required type="checkbox" label="勾選此欄位，我已於提交個人資料前詳閱Straumann ClearCorrect隱私政策，並同意透過電子郵件、電話或我同意的其他方式接收Straumann ClearCorrect，其關係企業及合作夥伴提供的 Clearcorrect 產品資訊。這些資訊可能包含產品行銷內容、特殊優惠、有用的提示、以及向您請求關於使用ClearCorrect產品體驗或諮詢經驗的回饋。" />
        </Form.Group>
      </Form.Group>

      <Form.Group>
        <div className={styles.btnBlock}>
          <button className="btn" type="submit" onClick={clicked}>
            Send Message
          </button>
          <div className={success ? `${styles.success}` : `${styles.success} ${styles.hidden}`}>您的留言已送出成功，將有專人聯絡您</div>
        </div>
      </Form.Group>
    </Form>
  );
};

export default ContactFormUser;
