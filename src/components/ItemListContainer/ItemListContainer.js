

import React, {useState,useEffect} from 'react';
     // <ItemCount product_name='Paquete de flechas hierro' stock={5} initial={1} />
     //     <ItemCount product_name='Paquete de flechas acero' stock={9} initial={1} />

import jsonpack from '../data.json';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({name}) => {
    const[item,setItems]=useState([])

    useEffect(()=>{
        
        const call = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(jsonpack)
            },2000)
        })
    
        call.then(response=> {
            setItems(response)
        })

    }, [])

    return (

       <div name="test">

            <div class="p-3 mb-2 bg-dark text-white">
                {name}
                <ItemList items={item}/>
            </div>

        </div>
   )
}


export default ItemListContainer;


