import React from 'react';

const ProgressBar = ({label, max, percentage}) => {
    return (
        <div>
            <label>{label}</label>
            <progress max={max} value={percentage}></progress>
        </div>
    );
}

export default ProgressBar;
