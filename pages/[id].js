import { useState , Fragment  } from "react"
import Link from "next/link"
import Head from "next/head"
export default function id(data){
    return(
<>
<Head>
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</Head>
<div className ='flexr'>

<div>
<img src={data.image} height= '300' width = '300' />


</div>

<div>
    <p className='describe'>{data.title}</p>
    <h5>Price:</h5>
    <h4>{data.price}$</h4>
<input type='number' placeholder='enter quanity' />
<div className="buttons">
    <div className='btn btn-primary'>Buy Now</div>
    <div className='btn btn-success'>Add to Cart</div>
</div>
<div className="add">
    <span><i className="fas fa-love"></i>Add to Enhacment</span>

</div>
</div>

</div>
<div className="des"><div className='btn btn-light'>Describtion</div></div>
<div className="describtion">
<h4>Product Describtion:</h4>

</div>
<div className="describted">
   <h6> {data.description}</h6>
   <h6> {data.description}</h6>
   <h6> {data.description}</h6>
    </div>
<style jsx>
    {
     `
     .first{
      width:350px  
     }
     .flexr{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
               margin-top: 20px
     }
     .describe{
width: 400px;
font-weight: 600;
     }
     .buttons{
        display: flex;
        margin-top: 20px;
        gap: 20px
     }
     img{
        transition: 0.4s;
        cursor: pointer;
        margin-bottom: 20px
     }
     img:hover{
       transform: scale(1.1)
     }
     
     .des{
        background-color: #eee;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;

     }
     
     .des div{
        font-weight: 700;
     }
     .add{
        margin-top: 20px;
        display: flex;
     gap: 20px
     }
     .describtion{
         margin-left: 10px;
     }
     .describted{
        background-color: #111;
        color: white;
        height: 400px;
        margin-bottom: 20px;
        width: 100%;
        padding: 5px
     }
     `
    }




</style>
</>

    )
}
export async function getServerSideProps(context){
    const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
    const data = await res.json()
    return {
        props: data
    }

}