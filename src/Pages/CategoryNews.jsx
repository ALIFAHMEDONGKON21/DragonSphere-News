import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const CategoryNews = () => {
    const{data}=useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>ali</h1>
            {
                data.map(singledata=><NewsCard key={singledata._id} singledata={singledata}></NewsCard>)
            }
        
        </div>
    );
};

export default CategoryNews;