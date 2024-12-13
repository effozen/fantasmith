import styles from './index.module.css';
import clsx from "clsx";

export const MainTitle = () => {
  return (
    <div className={clsx('container flex-center', styles.mt4)}>
      <h1 className={styles.title}><span className='text-success typography-h1'>동기화</span>를 바탕으로<br/><span className='text-warning typography-h1'>몰입</span>을 이끌어내는<br/>개발자
      </h1>
    </div>
);
}