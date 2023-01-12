import styles from '../../../styles/Sidebar/Nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItems = ({ to, icon, title } ) => {
  const router = useRouter();
  const pathName = router.pathname;
  const activeClass = pathName === to ? `${styles.active}` : ''

  return (
    <Link href={to}>
      <li className={`${styles.nav_items} ${activeClass}`}>
        {icon}
        <span>{title}</span>
      </li>
    </Link>
  )
}

export default NavItems
