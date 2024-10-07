import LogoIcon from "./LogoIcon";
import PromotionsMessage from "./PromotionsMessage";
import NextButton from "./NextButton";

function WelcomeScreen() {
  return (
    <>
      <LogoIcon />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <PromotionsMessage />
        <NextButton />
      </div>
    </>
  );
}

export default WelcomeScreen;
