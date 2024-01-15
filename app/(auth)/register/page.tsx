"use client";

import SubmitButton from "@/components/SubmitButton";
import { useRegister } from "@/hooks/auth";
import React from "react";

const Register = () => {
  const { handleRegister, error } = useRegister();

  return (
    <div>
      Register Page
      <form action={handleRegister}>
        <input type="text" name="username" />
        <input type="text" name="password" />
        <input type="text" name="repeatPassword" />
        <input type="checkbox" name="subscribeToNewsLetter" />
        <div>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input type="radio" id="other" name="gender" value="other" />
          <label htmlFor="other">Other</label>
        </div>

        <select name="status">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <input type="number" name="yearOfBirth" />
        <SubmitButton />
      </form>
      {error && error}
    </div>
  );
};

export default Register;
