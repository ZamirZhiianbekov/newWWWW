import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {BsFillBasket3Fill, BsFillSuitHeartFill} from "react-icons/bs";

const ProductCard = ({el}) => {
    const dispatch = useDispatch()
    const {favorite, basket } = useSelector(s => s)
    const found = favorite.some(some => some.id === el.id)
    const btn = basket.some(some => some.id === el.id)

    const addToBasket = () => {
        dispatch({type:"ADD_TO_BASKET", payload: el})
    }
    const addToFavorite = () => {
        dispatch({type: "ADD_TO_FAVORITE", payload: el })
    }
    return (
        <div
            className="w-[400px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={el.image} alt=""/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.price} $</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.rating}</p>

                { btn ?
                    <Link to={"/basket"}>
                        <button className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
                            <BsFillBasket3Fill/>
                        </button>
                    </Link> :
                    <button onClick={() => {
                        addToBasket()

                    }
                    }
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {el.price} $
                    </button>

                }
                <button onClick={addToFavorite}
                    className="ml-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <BsFillSuitHeartFill className={found ? "text-red-600" : "text-white"}/>
                </button>
            </div>
        </div>

    );
};

export default ProductCard;