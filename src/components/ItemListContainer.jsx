import React from 'react';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container" style={{ textAlign: 'center', padding: '20px', fontSize: '20px' }}>
            <p>{greeting}</p>
        </div>
    );
};

export default ItemListContainer;
