import React, { useEffect } from 'react';

const TEMP = ({ setSelectedLink, link }) => {

    useEffect(() => {
        setSelectedLink(link);
    });
    return (
        <div>TEMP</div>
    );
};

export default TEMP;
