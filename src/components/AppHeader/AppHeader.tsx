import styles from './AppHeader.module.css';

const AppHeader = function(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hacktober Password Generator</h1>
    </div>
  );
};
  
export default AppHeader;
  