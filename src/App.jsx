import styles from './App.module.scss';
import { Outlet } from 'react-router-dom';
// import { changeLanguage } from './i18n';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

function App() {
  // const lang = useSelector((state) => state.uiSlice.lang);
  // useEffect(() => {
  //   changeLanguage(lang);
  // }, [lang]);
  return (
    <>
      {/* <div className={styles.lang}>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ar')}>AR</button>
      </div> */}
      <Outlet />
    </>
  );
}

export default App;
