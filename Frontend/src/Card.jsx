import react from 'react'
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
        <><div className="container-fluid">

            <div className="card" >
                <img className="card-img-top" src={props.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <NavLink to="" className="btn btn-primary">Get Started</NavLink>
                </div>
            </div>

        </div>


        </>
    );
}

export default Card;