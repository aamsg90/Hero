import React from 'react';
import { Button } from 'reactstrap';

function Buttons({ color, clickHandler, btntext, className }) {
    return (
        <div>
            <Button 
                color={color}
                onClick={clickHandler}
                className={className}
                >{btntext}
            </Button>
        </div>
    );
}

export default Buttons;