import React from 'react'

function TreeItem(props) {
    let treeItems;
    if (!!props.item.inner) {
        treeItems = props.item.inner.map((item, i) =>
            <TreeItem key={i} item={item}/>
        );
    }


    return (
        <div className="item">
            +{props.item.title}
            <div>
                {treeItems}
            </div>
        </div>
    );
}

export default TreeItem;