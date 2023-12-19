"use client";

import { useEffect, useState } from "react";
import { LoginModal } from "../modals/loginModal";
import { LoginPasswordModal } from "../modals/loginPasswordModal";
import { RegisterModalOne } from "../modals/registerModalOne";

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
    </>
  );
};
