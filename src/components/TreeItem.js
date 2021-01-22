import React from 'react'

function TreeItem(props) {
    return (
        <div className="item">
            +{props.item.title}
        </div>
    );
}

export default TreeItem;