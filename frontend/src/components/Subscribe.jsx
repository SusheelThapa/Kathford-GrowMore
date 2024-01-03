import React from "react";
import { Link } from "react-router-dom";
const Subscribe = () => {
  return (
    <section
      className="w-screen m-20"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url('https://www.vecteezy.com/vector-art/15682915-colorful-neon-light-background')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          padding: "40px",
          width: "60%",
          maxWidth: "600px",
        }}
      >
        <img
          src="https://media.discordapp.net/attachments/1073440248861823038/1191722011844685926/logo.png?ex=65a6789c&is=6594039c&hm=8c02f93baf9314d38cf689ddd23813d499de5710fc986e25a1be0a5df067bc3e&=&format=webp&quality=lossless&width=608&height=608" //
          className="bg-black"
          alt="Feature Image"
          style={{
            width: "100%",
            borderRadius: "10px 10px 0 0",
            marginBottom: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        />

        <div style={{ textAlign: "left", margin: "30px 0" }}>
          <div style={{ marginBottom: "20px" }}>
            <h3 className="font-bold">Personalized Analytics</h3>
            <p>
              Track and analyze your startup's performance with in-depth
              analytics.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h3 className="font-bold">Resource Hub</h3>
            <p>
              Access a rich repository of resources and events to fuel your
              startup's journey.
            </p>
          </div>
          <div>
            <h3 className="font-bold">Preference by Investors</h3>
            <p>
              Investors get to see your profile as verified on the top of their
              list.
            </p>
          </div>
        </div>
        <Link to="/form">
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "15px 30px",
              fontSize: "16px",
              marginTop: "20px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Subscribe Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Subscribe;
