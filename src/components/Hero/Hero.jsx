import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import Image from "../../assets/18311eff-37ca-4b70-8849-17eb91b8f4ff-removebg-preview.png";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
            dir="RTL"
          >
            مرحبا بكم جميعا ,
            <br />
            في قناة إبراهيم ومحمد .
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            نحن داعمين للمحتوى الرياضي
            <br />
            وإعطاء ردة فعل على المباريات
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
          style={{
            marginTop: "50rem",
          }}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src={Image}
            alt=""
          />
        </motion.div>

        <a className={css.email} href="mailto:zainkeepscode@gmail.com">
          zainkeepscode@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            {/* <div className="primaryText" dir="rtl">
              2
            </div> */}
            <div className="secondaryText" dir="rtl">
              <div>سنتان من الخبرة</div>
              <div></div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src={Image} alt="" />
            شهادات احترافية في مجال الرياضة ولتأهيل الرياضي
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
