import React from 'react';
import {Card} from 'react-bootstrap';









const ItemList = ({items}) =>{
    console.log(items);
    return (
        <>
        { items.map(item=>

            <Item key={item.id} jsonpack={item} />

        )}



        </>

    )
}

export default ItemList;

