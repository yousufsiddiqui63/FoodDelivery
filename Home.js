import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cards1 from "../components/Cards1";
import Carousel from "../components/Carousel";
import Footer from "..components/Footer";

export default function Home() {
  const [search, setSearch] = useState(['']);
  const [foodCat, setFoodCat] = useState([]);
  // const [foodCat, setFoodItem] = useState([]);

  const loadData = async ()=> {
    let response = await fetch("https://localhost:5001/api/foodData", {
      method:"POST",
    headers: {
      'Content-Type': 'application/json'
    }
  });
  response = await response.json();
  setFoodItem(response[0]);
  setFoodCat(response[1]);
  // console.log(response[0],response[1]);
}

useEffect(()=>{
  loadData()
}, [])
  
  return (
    
      <div>
        
        <Navbar />
      </div>
      <div>
           <div id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}>
          
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search" value={search} onChange={e} =>{setSearch(e.target.value)}}
                
                /* <button className="btn btn-outline-success" type="submit">
                  Search </button> */
              </div>
            </div>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100 h-50 "
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
           </div>
      <div className="m-3">
        <Cards1 />
      </div>
      <div className="m-3">
        <Cards1 />
      </div>
      <div className="container">
      {
        foodCat !==[]
        ? foodCat.map((data)=>{
          return (<div className="row mb-3">
            <div key={data._id} className="fs-3 m-3">
            {data.CategoryName}
            </div>
            <hr />
            {foodItem !== []
            ? 
            foodItem.filter.((item)=> (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
            .map(filterItems => {
                return (
                  <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                  <Cards1 foodName = {filterItems.name} 
                    options={filterItems.options[0]}
                    imgSrc ={filterItems.img} >
                 
                  </Cards1>

                  </div>
                )
            }) : <div>No Such Data Found</div>} </div>
            )
        })
        : ""
      }
        <Cards1 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
