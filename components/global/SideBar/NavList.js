import styles from '../../../styles/Sidebar/Nav.module.css'
import NavItems from './NavItems'

const NavList = ({ title, items }) => {

  return (
    <>
      <div className={styles.nav_title}>{title}</div>
      <ul className={styles.list}>
        {items.map(({ to, icon, title}, idx) => {
          return <NavItems key={idx} to={to} icon={icon} title={title} />
        })}
      </ul>
    </>
  )
}

export default NavList
