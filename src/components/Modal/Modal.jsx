import css from './Modal.module.css';
import { useEffect } from 'react';
// import { useState } from 'react';


function Modal({ closeModal, children, open }) {

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = e => {
      if (e.code === 'Escape');
      closeModal();
    };


    window.addEventListener('keydown', handleKeyDown);
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      body.style.overflow = 'auto';
    };
    
  }, [closeModal, open]);

  if (!open) return null;

    // const calculateDailyRate = () => {
    // const bmr = 10 * currentWeight + 6.25 * height - 5 * age - 161;

    // const activityFactor = 1.2;

    // const calories = Math.round(bmr * activityFactor);
    // setDailyRate(calories);
    // };

  return (
    <div className={css.modalBackground}>
      <div className={css.modalOverlay} onClick={closeModal}>
      </div>
      <div className={css.modalContainer}>
        {children}
      </div>
    </div>
  );
}
export default Modal;