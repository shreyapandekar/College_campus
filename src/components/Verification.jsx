import {  verify } from "../assets";
import styles, { layout } from "../style";

const Verification = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={verify} alt="" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      
      Campus-Specific <br className="sm:block hidden" />
      <span className="text-gradient">User Verification</span>{" "}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Ensure all users are affiliated with the university.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
     
      Privacy settings: Control the visibility of user profiles and information.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Group management tools: Assign roles, moderate discussions, and manage memberships.
      </p>
    </div>
  </section>
);

export default Verification;