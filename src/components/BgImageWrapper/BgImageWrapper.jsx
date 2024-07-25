import heroMob from '../../Asset/images/hero-image-mob.png';
import heroTab from '../../Asset/images/hero-image-tab.png';
import css from './BgImageWrapper.module.css';
import DecorationTab from '../DecorationTab/DecorationTab.jsx'
import useMediaQuery from '../../hooks/useMediaQuery';

export const BgImageWrapper = () => {
  const isMobile = useMediaQuery('(max-width: 375px)');
  return (
      <div className={css.wrapper}>
        <div className={css.imgDiv}>
          <img className={css.image} src={isMobile ? heroMob : heroTab} alt="person holding card" />
          <DecorationTab className={css.decorationTab}/>
        </div>
      </div>
    
  )
}
