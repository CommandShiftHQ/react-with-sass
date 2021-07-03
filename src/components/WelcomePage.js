import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import WelcomeContent from "./WelcomeContent";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <main className="welcome-page__main">
        <WelcomeContent />
      </main>
      <aside className="welcome-page__aside">
        <WelcomeBanner />
      </aside>
    </div>
  );
};

export default WelcomePage;
