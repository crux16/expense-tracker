import React from 'react';
import css from './AllUsersTab.module.css';
import User1 from '../../Asset/images/users/Dakota.png';
import User2 from '../../Asset/images/users/Chris.png';
import User3 from '../../Asset/images/users/Jennifer.png';


const AllUsersTab = () => {
  return (
    <div className={css.userStats}>
      <div className={css.userImages}>
        <img src={User1} alt="Dakota" className={css.userImage} />
        <img src={User2} alt="Chris" className={css.userImage} />
        <img src={User3} alt="Chris" className={css.userImage} />
      </div>
      <div className={css.userInfo}>
        <p className={css.userCount}>1000 users +</p>
        <p className={css.userDescription}>Trusted by users for reliable <br/> expense tracking!</p>
      </div>
    </div>
  );
};

export default AllUsersTab;