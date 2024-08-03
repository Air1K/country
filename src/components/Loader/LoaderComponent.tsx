import React, {FC} from 'react';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import styles from './LoaderComponentStyle.module.scss';
const LoaderComponent: FC = () => {
    return (
        <div className={`fullParent ${styles.container}`}>
            <HourglassBottomIcon className={styles.loader}/>
        </div>
    );
};

export default LoaderComponent;
