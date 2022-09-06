import { useState , Fragment  } from "react"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

export default function Home({products}) {
 
  return (
    
    <>

<div className='content'>  

{
  products.map(prod => {
    return(
    <div className='flex' key={`${prod.id}`}>
<img src={prod.image} height= '200' width='200' />
      <Link href={`/${prod.id}`}><p>{prod.title}</p></Link>
      <h4>{prod.price}$</h4>
    </div>
  )})
}

</div> 
<style jsx>
{
  `
   p{
    cursor: pointer
  }
  p:hover{
color : rgb(0 , 160 , 255);

}
.link{
  cursor: pointer;
}
.link:hover{
  color: #1f90fa;
}
.content{
  display: grid;
grid-template-columns: repeat(auto-fit , 400px);
margin-top: 10px;
justify-content:center;

gap: 10px;
}
.content button{
  margin-left:90px ;
  margin-bottom: 20px;
}
.content div div{
  border: 1px solid #666;
}  
`
}
</style>





    </>
    
  )
 
}
export async function getStaticProps(){
  const res = await fetch("https://fakestoreapi.com/products?limit=14")
  const products = await res.json()
  return{
    props:{products}
    
  } 
}
