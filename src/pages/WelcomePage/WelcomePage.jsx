import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './WelcomePage.module.css';
import { AuthNav } from '../../components/AuthNav/AuthNav';
import { BgImageWrapper } from '../../components/BgImageWrapper/BgImageWrapper';
import  AllUsersTab from '../../components/AllUsersTab/AllUsersTab';
import useMediaQuery from '../../hooks/useMediaQuery';
import { HeroContent } from '../../components/HeroContent/HeroContent'

const HomePage = () => {
  const isDesktop = useMediaQuery('(min-width: 1439px)');
  return (
    <HelmetProvider>
      <Helmet>
        <title>Expense Tracker</title>
      </Helmet>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div>
          <HeroContent/>
          <AuthNav />
          </div>
          <div className={css.authNavContainer}>
            {isDesktop ? <AllUsersTab /> : null}
          </div>
        </div>
        <BgImageWrapper className={css.bgImageWrapper}/>
      </div>
      
    </HelmetProvider>
  );
};

export default HomePage;
