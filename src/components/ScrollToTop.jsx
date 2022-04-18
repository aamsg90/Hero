import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { withRouter } from 'react-router-dom';

// ensure that the scroll is always at the top of the page
const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};

export default withRouter(ScrollToTop);