import React from 'react'

function TreeItem(props) {
    let treeItems;
    if (!!props.item.inner) {
        treeItems = props.item.inner.map((item, i) =>
            <TreeItem key={i} item={item} deep={props.deep+1}/>
        );
    }


    return (
        <div className="item" style={{marginLeft : `${props.deep * 5}px`}}>
            +{props.item.title}
            <div>
                {treeItems}
            </div>
        </div>
    );
}

export default TreeItem;