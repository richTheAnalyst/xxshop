/*
type User = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}



export default async function UserPage({ 
    params ,
}: { params: { userid: string } ;
}) {

    const response = await fetch(`https://fakestoreapi.com/products/${params.userid}`);
    const user: User = await response.json();
    const userid = params.userid;
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>User Page</h1>
        <p>product id: {userid}</p>
        <p>Name: {user.title}</p>
        <p>product price: {user.price}</p>
        <p>Description: {user.description}</p>
        <p>Category: {user.category}</p>
        <p>Image: <img src={user.image} alt={user.title} width={100} height={100} /></p>



        </div>

}*/