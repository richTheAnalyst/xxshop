import Buttoncmp from "./button";

export default async function Contact() {

   const respone = await fetch("https://fakestoreapi.com/products");
   const data = await respone.json();
   console.log(data);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>Contact Us</h1>
        <Buttoncmp />
        </div>   
    )
}