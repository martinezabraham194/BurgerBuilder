import React from 'react';

import Auxs from '../../hoc/Auxs';
import classes from '../Layout/Layout.css';

const layout = (props) => (
    <Auxs>
        <div>Toolbar, SidDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxs>
);

export default layout;