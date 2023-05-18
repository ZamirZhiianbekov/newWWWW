import React from 'react';
import { useSelector} from "react-redux";
import BasketCard from "./BasketCard";

const Basket = () => {
    const {basket} = useSelector(state => state)
    return (

        <div className=" container py-20 relative overflow-x-auto">
            <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        {
                            basket.length === 0 ? "Empty basket" : "Count"
                        }
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map(el => <BasketCard el={el}/>)
                }
                </tbody>
            </table>
        </div>

    );
};

export default Basket;