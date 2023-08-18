import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';

export function AppHeader() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <div className={styles.menus}>
                        <li className="pl-5 pr-5 pt-4 pb-4">
                            <a href="#" className={styles.block}>
                                <BurgerIcon type="primary" />
                                <p className="text text_type_main-default">Конструктор</p>
                            </a>
                        </li>
                        <li className="pl-5 pr-5 pt-4 pb-4">
                            <a href="#" className={styles.block}>
                                <ListIcon type="secondary" />
                                <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
                            </a>
                        </li>
                    </div>
                    <li>
                        <a href="#">
                            <Logo />
                        </a>
                    </li>
                    <li className={styles.login}>
                        <a href="#" className={`${styles.block} pl-5 pr-5 pt-4 pb-4`}>
                            <ProfileIcon type="secondary" />
                            <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}