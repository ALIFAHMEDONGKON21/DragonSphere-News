
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavber = () => {
    const [caterogyes ,setcatergorys]=useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res=>res.json())
        .then(data =>setcatergorys(data.data.news_category));
    },[])
    return (
        <div>
            <p className=" font-semibold">ALL CATERORY </p>
            <div className=" flex flex-col gap-2 mt-5">
                {
                    caterogyes.map((cateroger ,index)=><NavLink to={`/category/${cateroger.category_id}`}
                     className="btn" key={index}>
                        {cateroger.category_name}
                        
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavber;