import React from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const SingleProduct = ({ img, title, rating = 3.7 }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (rating >= i - 0.75) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-500" />);
            }
        }
        return stars;
    };
    return (
        <div className="flex flex-col items-center justify-center h-[500px] m-[45px] cursor-pointer">
            <img
                src={img}
                alt="Product"
                className="h-[400px] w-[300px] object-cover"
            />
            <h2 className="font-semibold text-[18px] w-[300px]">
            {title}
            </h2>
            <span className="font-semibold text-[18px]">$100</span>
            <div className="flex items-center gap-1 mt-2">
                {renderStars()}{" "}
                <span className="ml-2 text-sm text-gray-500">
                    ({rating.toFixed(1)})
                </span>
            </div>
        </div>
    );
};

export default SingleProduct;