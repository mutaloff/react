import styles from './Subscriptions.module.css';
import icon from '../../imgs/Common/UserIcon.png';
import { NavLink } from 'react-router-dom';



function Subscriptions(props){
  let totalPages = Math.ceil(props.totalUsersCount / props.pageSize)
  let offset = 7
  return (
    <div className={styles.main}>
      {props.subscriptionUsers.map((el) => 
        <div className={styles.wrapper} key={el.id}>
          <NavLink to={`/profile/${el.id}`}>
            <img className={styles.img} src={!el.photos.small ? icon: el.photos.small} alt={icon}/>
          </NavLink>
          <p>{`${el.name} ${el.lastname}`}</p>       
          {el.followed
          ? <button disabled={props.isFollowingForbidden.some(id => id === el.id)}
            onClick={() => {props.unfollow(el.id)}}
            className={styles.btn}>Отписаться</button> 
          : <button disabled={props.isFollowingForbidden.some(id => id === el.id)}
            onClick={() => {props.follow(el.id)}} 
            className={styles.btn}>Подписаться</button>}
        </div>)}

        <div className={styles.pagesBar}>
          {props.currentPage > offset + 1 && <span>...  </span>}
          {[...Array(totalPages).keys()].map((el) => 
            el + offset + 2 > props.currentPage && el < props.currentPage + offset
            ? <span key={el.toString()}
                className={`${styles.pages} ${props.currentPage === el + 1 && styles.selectedPage}`}
                onClick={() => props.onPageChanged(el + 1)}>
                {`${el + 1}  `}
              </span>
            : <span key={el.toString()}></span>)}
          {props.currentPage < totalPages - offset && <span>...</span>}
        </div>
    </div>
  )
}

export default Subscriptions