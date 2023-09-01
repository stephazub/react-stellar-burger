import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './AppHeader.module.css';
import { NavLink, useRouteMatch } from "react-router-dom";

export function AppHeader() {
    const isConstructor = useRouteMatch({ path: "/", exact: true });
    const isFeed = useRouteMatch({ path: "/feed" });
    const isProfile = useRouteMatch({ path: "/profile" });

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <div className={styles.menus}>
                        <li className="pl-5 pr-5 pt-4 pb-4">
                            <NavLink to='/' className={`${styles.block} pl-5 pr-5 pt-4 pb-4`}>
                                <BurgerIcon type={isConstructor ? 'primary' : 'secondary'} />
                                <p className={isConstructor ? "text text_type_main-default" : "text text_type_main-default text_color_inactive"}>Конструктор</p>
                            </NavLink>
                        </li>
                        <li className="pl-5 pr-5 pt-4 pb-4">
                            <NavLink to='/feed' className={`${styles.block} pl-5 pr-5 pt-4 pb-4`}>
                                <ListIcon type={isFeed ? 'primary' : 'secondary'} />
                                <p className={isFeed ? "text text_type_main-default" : "text text_type_main-default text_color_inactive"}>Лента заказов</p>
                            </NavLink>
                        </li>
                    </div>
                    <li>
                        <NavLink to='/'>
                            <Logo />
                        </NavLink>
                    </li>
                    <li className={styles.login}>
                        <NavLink to='/profile' className={`${styles.block} pl-5 pr-5 pt-4 pb-4`} >
                            <ProfileIcon type={isProfile ? 'primary' : 'secondary'} />
                            <p className={isProfile ? "text text_type_main-default" : "text text_type_main-default text_color_inactive"}>Личный кабинет</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}