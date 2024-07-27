import heroMob from '../../Asset/images/hero-mob.png';
import heroTab from '../../Asset/images/hero-tab.png';
import heroDesk from '../../Asset/images/hero-desk.png';
import css from './BgImageWrapper.module.css';
import DecorationTab from '../DecorationTab/DecorationTab.jsx'
import useMediaQuery from '../../hooks/useMediaQuery';

export const BgImageWrapper = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(max-width: 1157px)');
  const isDesktop = useMediaQuery('(min-width: 1157px)');

  let heroImage;
  if (isMobile) {
    heroImage = heroMob;
  } else if (isTablet) {
    heroImage = heroTab;
  } else if (isDesktop) {
    heroImage = heroDesk;
  }
  return (
      <div className={css.wrapper}>
        <img className={css.image} src={heroImage} alt="person holding card" />
        <DecorationTab className={css.decorationTab}/>
      </div>
    
  )
}
