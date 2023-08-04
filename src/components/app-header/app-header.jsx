import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

export function AppHeader() {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul className={styles.list}>
                    <div className={styles.columns}>
                        <li>
                            <a href="#" className={styles.link}>
                                <BurgerIcon type="primary" />
                                <p>Конструктор</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.link}>
                                <ListIcon type="secondary" />
                                <p>Лента заказов</p>
                            </a>
                        </li>
                    </div>
                    <li className={styles.logo}>
                        <a href="#" className={styles.link}>
                            <Logo />
                        </a>
                    </li>
                    <li className={styles.personal_account}>
                        <a href="#" className={styles.link}>
                            <ProfileIcon type="secondary" />
                            <p>Личный кабинет</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}