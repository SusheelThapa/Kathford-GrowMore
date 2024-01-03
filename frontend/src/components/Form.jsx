import React, { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

function Form() {
  const [amount, setAmount] = useState("1000");
  const [returnUrl, setReturnUrl] = useState("http://localhost:5173/dashboard");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      amount: amount,
      return_url: returnUrl,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/khalti/",
        formData
      );

      const jsonData = JSON.parse(data);

      console.log("Response from the server:", jsonData);
      //   console.log(data.response.payment_url);
        window.location.replace(jsonData.payment_url);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="return_url" value={returnUrl} />
        <button type="submit" className="bt btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
