import react from 'react'
import { NavLink } from 'react-router-dom';
import Ourwork from "./Ourwork"
import man from "./manworking.svg"
function Home() {
  return (
    <>

      <div className="container mx-auto ">
        <div className="row ">
          <div className="col-md-8 mt-5 pt-5 ">
            <h1 >Grow your business with <br/> <span className="text-primary"> Groww More </span></h1>
            <p className="text-secondary">We are team of Talented  Developers who help people make Amazing Websites, Apps and many more... </p>
            <NavLink to="/service" className="btn btn-primary">Get Started</NavLink>
          </div>
          <div className="col-md-4 pt-5 animated">
            <img className="animate__animated animate__bounce home"  src={man} />
          </div>
        </div>
        <Ourwork/>
      </div>
      
    </>
  );
}

export default Home;
