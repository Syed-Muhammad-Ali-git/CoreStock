"use client";

import React, { useState } from "react";
import ResetPasswordModal from "../modals/resetPassword";

const Testing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div>Testing</div>
      <br />
      <button className="border px-4 py-2 rounded-md" onClick={openModal}>
        Open Edit Modal
      </button>

      <ResetPasswordModal isOpen={isOpen} onClose={closeModal} />
    </>
  );
};

export default Testing;
