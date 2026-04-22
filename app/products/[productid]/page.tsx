import { getProduct } from "../../lib/api";

type product = {
  id: number;
  title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export default async function View({
    params,}:
     { 
        params: 
        { id: string }
     }
) 
{
     const product : product = await getProduct(params.id);

    return (
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <img src={product.image} alt={product.title} className="w-64 h-64 object-contain" />
       </div>   
    
    );
}