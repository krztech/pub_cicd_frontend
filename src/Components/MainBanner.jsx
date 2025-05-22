import React from "react";
import Navbar from "../../../Components/Navbar";

const MainBanner = () => {
  return (
    <div style={{ position: "relative", height: "856px", overflow: "hidden" }}>
      <Navbar />

      <div
        style={{
          width: "493px",
          height: "128px",
          top: "193px",
          left: "50%",
          transform: "translateX(-50%)",
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
          textAlign: "left",
        }}
      >
        <h4 style={styles.subintrohead}>Your Vision, Our Expertise</h4>
        <p style={styles.subintrotext}>
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
          textAlign: "right",
        }}
      >
        <h4 style={styles.subintrohead}>Turning Challenges into Solutions</h4>
        <p style={styles.subintrotext}>
          We blend Data, Design, and Technology to craft impactful solutions
          tailored to your business needs.
        </p>
      </div>
      <div
        style={{
          width: "933px",
          height: "933px",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: "-503.06px",
          borderRadius: "50%",
          background: "linear-gradient(164.14deg, #FFFFFF 20.25%, #BBBBBB 77.11%)",
          boxShadow: "0px 4px 60.8px 0px #FFFFFF inset",
          position: "absolute",
          zIndex: -1,
          rotate: "-4.62deg",
        }}
      ></div>
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
    fontFamily: "Manrope",
    color: "#FFFFF57",
  },
  introhead: {
    fontWeight: 400,
    fontSize: "48px",
    lineHeight: "80px",
    textTransform: "uppercase",
    fontFamily: "Lexend Zetta",
    color: "#545454",
  },
  subintrohead: {
    fontFamily: "Lexend Deca",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "25px",
    verticalAlign: "middle",
    textTransform: "uppercase",
    color: "#1B1464",
  },
  subintrotext: {
    fontFamily: "Lexend Deca",
    fontWeight: 300,
    fontSize: "13px",
    lineHeight: "17px",
    verticalAlign: "middle",
    textTransform: "capitalize",
    color: "#242626",
    marginTop: "10px",
  },
};

export default MainBanner;
