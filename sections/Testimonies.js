import React from "react";
import Testimony from "../components/Testimony";
import styles from './Testimonies.module.css'
const testimony = [
  { name: "GERALD B.", txt: "They’ve been so easy and wonderful to use.", src: "user_1.jpeg" },
  { name: "MERCEDES F.", txt: "“I smile a lot more and a lot bigger.” My favorite thing about ClearCorrect was no one knew I was doing it, and everybody complimented my smile while I was in treatment", src: "user_2.jpeg" },
  { name: "CONNIE H.", txt: "“you just pop ‘em in and pop ‘em out.” I’m a professional, so, going out and meeting clients and everything—you just want to put on your best face, and be able to give them your best smile… I was so glad I did it. It just makes me feel better.", src: "user_3.jpeg" },
];

const Testimonies = () => {
  return (
    <div>
      <div className={styles.txtWrap}>
        <h2>What can clear aligners do for me?</h2>
        <p>Straighter teeth don’t just look better; they work better too. Poorly-aligned teeth can interfere with bite function, can wear out faster, and are more prone to cavities. And once you’ve got a smile you love, you may just find you can’t help but show it off.</p>
      </div>
      <div className="flex">
        {testimony.map((el, i) => {
          return <Testimony key={i} el={el} />;
        })}
      </div>
    </div>
  );
};

export default Testimonies;
