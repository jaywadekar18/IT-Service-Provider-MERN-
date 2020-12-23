import React from "react"
import { NavLink } from "react-router-dom"
import teamphoto from "./teamphoto.jpg"
function Ourwork() {
    return (
        <>
            <div className="container mx-auto mt-5">
                <h1 className="text-center">Our Work</h1>

                <div className="row ">
                    <div className="col-md-6">
                        <img src={teamphoto} />
                    </div>
                    <div className="col-md-6 pt-5">We at <span className="text-primary">Groww More Technologies</span> love 
                    to build things which matters the most for growing your business online <br/>
                    <NavLink to="/contact" className="btn btn-primary">Contact Us</NavLink>

                </div>

                </div>
            </div>









        </>
    )
}
export default Ourwork;