import { useState } from "react";

import Header from "./components/header";
import Form from "./components/form";
import Alert from "~/components/alert";

export default function SignUp() {
  const [message, setMessage] = useState("");

  const createUser = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/users/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      const { message } = result;
      setMessage(message);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    createUser(data);
  };

  return (
    <div className="max-w-sm">
      <Header />

      {message && <Alert className="mt-12">{message}</Alert>}

      <Form handleSubmitForm={handleSubmitForm} />
    </div>
  );
}
