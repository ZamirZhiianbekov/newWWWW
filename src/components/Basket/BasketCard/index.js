import React from 'react';
import {useDispatch} from "react-redux";


const BasketCard = ({el}) => {
   const dispatch = useDispatch()
    const delProduct = () => {
       dispatch({type:"DELETE_PRODUCT", payload: el})
    }
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img src={el.image} alt="" width={"150px"}/>
            </th>
            <td className="px-6 py-4">
                {el.title}
            </td>
            <td className="px-6 py-4">
                {el.price}
            </td>
            <td className="px-6 py-4">
                <button className="mr-4 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">-</button>
                {el.count}
                 <button className=" ml-4 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">+</button>
            </td>
            <td className="px-6 py-4">
                <button onClick={delProduct} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    DELETE
                </button>
            </td>
        </tr>

    );
};

export default BasketCard;