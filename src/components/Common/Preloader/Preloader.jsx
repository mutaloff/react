import styles from "./Preloader.module.css";
import loading from '../../../imgs/Common/loading.gif';

function Preloader(props){
    return(
        <div className={styles.loading}>
          <img src={loading} alt={loading} width='60'/>
        </div>
    )
}

export default Preloader