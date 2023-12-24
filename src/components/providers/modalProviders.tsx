"use client";

import { useEffect, useState } from "react";
import { LoginModal } from "../modals/loginModal";
import { LoginPasswordModal } from "../modals/loginPasswordModal";
import { RegisterModalOne } from "../modals/registerModalOne";
import { RegisterModalTwo } from "../modals/registerModalTwo";
import { RegisterModalThree } from "../modals/registerModalThree";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <LoginModal />
      <LoginPasswordModal />
      <RegisterModalOne />
      <RegisterModalTwo />
      <RegisterModalThree />
    </>
  );
};
