import React from 'react';
import { useSelector } from 'react-redux';
import styles from './pages.module.css';
import { Redirect } from 'react-router-dom';

export function Feed() {

    const authorization = useSelector((state) => state.userAuthorization.authorization);

    if (!authorization) {
        return (
            <Redirect to={'/login'} />
        )
    }

    return (
        <span className={`${styles.text} text text_type_main-medium text_color_inactive`}>будет реализовано в следующем спринте</span>
    )
}