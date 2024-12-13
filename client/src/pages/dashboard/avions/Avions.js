import React, { useEffect } from 'react';

const Avions = ({ setSelectedLink, link }) => {

    useEffect(() => {
        setSelectedLink(link);
    }, [setSelectedLink, link]);
    return (
        <div>Avions</div>
    );
};

export default Avions;
