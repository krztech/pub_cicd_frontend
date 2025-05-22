import React from "react";
import Navbar from "../../../Components/Navbar";

const MainBanner = () => {
  return (
    <div style={{ position: "relative", height: "856px" }}>
      <Navbar />
      <div
        style={{
          width: "933px",
          height: "933px",
          left: "292.42.px",
          top: "1091.18px",
          bottom: "-473.06px",
          position: "absolute",
        }}
      ></div>
      <div
        style={{
          width: "493px",
          height: "128px",
          top: "109px",
          left:"30%",
          position: "absolute",
        }}
      >
        <p style={styles.introtext}>
          Quality isn't just our goal — it's our promise
        </p>
        <h2 style={styles.introhead}>we Excel in</h2>
      </div>
      <div
        style={{
          width: "189px",
          height: "188px",
          left: "91px",
          bottom: "88px",
          position: "absolute",
        }}
      >
        <h4>Your Vision, Our Expertise</h4>
        <p>
          Transforming data into insights, words into impact, designs into
          experiences, and concepts into reality—driven by innovation, powered
          by expertise.
        </p>
      </div>
      <div
        style={{
          width: "201px",
          height: "182px",
          right: "93px",
          bottom: "283px",
          position: "absolute",
        }}
      >
        <h4>Turning Challenges into Solutions</h4>
        <p>
          We blend Data, Design, and Technology to craft impactful solutions
          tailored to your business needs.
        </p>
      </div>
    </div>
  );
};

const styles = {
  introtext: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "29px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "#FFFFF57",
  },
  introhead: {
    fontWeight: 400,
    fontSize: "48px",
    lineHeight: "80px",
    textTransform: "uppercase",
    color: "#545454",
  },
};

export default MainBanner;
