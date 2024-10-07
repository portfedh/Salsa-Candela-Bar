import Logo from "./Logo";
import WelcomeMessage from "./WelcomeMessage";
import NextButton from "./NextButton";

function WelcomeScreen() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Logo />
      <WelcomeMessage />
      <NextButton />
    </div>
  );
}

export default WelcomeScreen;
