import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import './navbar.scss';
const styles = {
    wrapper: 'custom-navbar__wrapper',
    contentContainer: 'custom-navbar__content-container',
}

class Navbar extends React.Component {
    state = {
        isSidebarActive: true,
    }
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.contentContainer}>
                    Niccep
                    </div>
            </div>
        )
    }
}

export default Navbar;