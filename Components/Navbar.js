import { useState , Fragment  } from "react"
import Head from 'next/head'
import style from './../styles/Navbar.module.css'

export default function Navbar() {
 
  return (
    
    <>
    <Head>
        <title>MY nav</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
<script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>

    </Head>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#"><h3>Store</h3></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light x"  aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light x" href="/posts">Posts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light x me-2" href="/posts">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link btn btn-primary text-light p-2 ">Contact</a>
          
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>





    </>
    
  )
  
}
