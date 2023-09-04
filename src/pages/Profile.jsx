import styles from './pages.module.css';
import { Route } from 'react-router-dom';
import { ProfileMenu } from '../components/ProfileMenu/ProfileMenu';
import { UpdateProfileForm } from '../components/UpdateProfileForm/UpdateProfileForm';
import { OrderHistory } from '../components/OrderHistory/OrderHistory';

export function Profile() {

    return (
        <section className={styles.profile}>
            <ProfileMenu />
            <Route exact={true} path="/profile" component={UpdateProfileForm} />
            <Route exact={true} path="/profile/orders" component={OrderHistory} />
        </section>
    )
}