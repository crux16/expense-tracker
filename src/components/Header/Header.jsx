import { Navigation } from '../Navigation/Navigation';

// import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import  { useState }  from 'react';
import css from './Header.module.css';
import UserBarBtn from 'components/UserBarBtn/UserBarBtn';
import BurgerBtn from 'components/BurgerBtn/BurgerBtn';
import Modal from 'components/Modal/Modal';
import ModalBurgerMenu from 'components/Modal/ModalBurgerMenu/ModalBurgerMenu';
import useMediaQuery from 'hooks/useMediaQuery';
import TransactionsHistoryNav from 'components/TransactionsHistoryNav/TransactionsHistoryNav';

export const Header = () => {
  const isDesktop = useMediaQuery('(min-width: 1158px)');
  const { isLoggedIn } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const headerStyle = true;

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn && isDesktop && <TransactionsHistoryNav headerStyle={headerStyle}/>}
      {isLoggedIn && isDesktop && <UserBarBtn />}
      {isLoggedIn && <BurgerBtn onClick={handleOpenModal}/>}
       <Modal closeModal={handleCloseModal} open={modalOpen}>
        <ModalBurgerMenu />
      </Modal>
      
      
    </header>
  );
};
