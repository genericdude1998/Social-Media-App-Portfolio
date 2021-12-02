import React from 'react';

const ProgressBar = ({label, max, value}) => {
    return (
        <div>
            <label>{label}</label>
            <progress max={max} value={value}></progress>
        </div>
    );
}

export default ProgressBar;
