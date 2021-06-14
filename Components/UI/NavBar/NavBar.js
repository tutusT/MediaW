import Link from '../../ActiveLink'

const NavBar = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link href="/" shallow={true}>
            <a className="menu__link">Пользователи</a>
          </Link>
        </li>
        <li className="menu__item">
          <Link href="/posts">
            <a className="menu__link">Посты</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
