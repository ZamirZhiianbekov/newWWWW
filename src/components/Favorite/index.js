import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorite} = useSelector(s => s)
    return (
        <div className="container py-20" >
            <div className="flex flex-wrap gap-24">
                {favorite.map(el => (<ProductCard el={el}/>))}
            </div>
        </div>
    );
};

export default Favorite;