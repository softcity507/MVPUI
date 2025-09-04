import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const Verify: React.FC = () => {
  const [searchParams] = useSearchParams();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const email = searchParams.get("email");
    const password = searchParams.get("password");

    if (email && password) {
      if (emailRef.current) emailRef.current.value = email;
      if (passwordRef.current) passwordRef.current.value = password;
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", emailRef.current?.value);
    console.log("Password:", passwordRef.current?.value);
    // Update isVerified state here after successful verification
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} id="email" type="text" />
      <input ref={passwordRef} id="password" type="password" />
      <button type="submit">Verify</button>
    </form>
  );
};

export default Verify;
