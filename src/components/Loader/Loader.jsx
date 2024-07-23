import PropTypes from 'prop-types';
//import Spinner from 'react-spinners/HashLoader';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import s from '../Loader/Loader.module.css';

export default function Loader() {

  return (
    <div className={s.loader}>
      <ClimbingBoxLoader
        color="rgba(255, 0, 0, 1)"
        cssOverride={{}}
        size={20}
        speedMultiplier={1}

      />


      {/* <Spinner
        color="#ff9406"
        loading
        size={size}
        aria-label="Loading Spinner"
        speedMultiplier={0.7}
      /> */}
    </div>
  );
};

Loader.propTypes = {
  height: PropTypes.string,
};

// import { SyncLoader } from 'react-spinners';

// export const Loader = () => {
//   return <SyncLoader color="#36d7b7" />;
// };
