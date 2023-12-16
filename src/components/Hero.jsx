import styles from "../style";
import { mobile } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Chat App</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          For Campus
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A place where you can explore your college, clubs and other activities. Existing social media platforms are too broad and general, failing to cater to the specific needs of a college campus community.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={mobile} alt="" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[35%] h-[20%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[40%] h-[50%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[30%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;