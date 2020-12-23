import React from "react"
import { useForm } from "react-hook-form";
import axios from "axios"
function Form() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        axios.post("http://localhost:4000/", data)
        console.log(data)
        alert("data reseived")

    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="form-group font-weight-bold">
                    <label for="exampleFirstname" className="display-5">First name</label>
                    <input type="text" name="firstname"
                        ref={register({ required: true, minLength: 2 })} className="form-control " id="exampleInputPassword1" placeholder="Enter your first name" />
                    {errors.firstname && errors.firstname.type === "required" && (<p>this is req</p>)}
                    {errors.firstname && errors.firstname.type === "minLength" && (<p>min 2 s req</p>)}
                </div>



                <div className="form-group font-weight-bold">
                    <label for="exampleLastname">Last name</label>
                    <input type="text" name="lastname"
                        ref={register({ required: true, minLength: 2 })} className="form-control" id="exampleInputPassword1" placeholder="Enter your Last name" />
                    {errors.firstname && errors.firstname.type === "required" && (<p>this is req</p>)}
                    {errors.firstname && errors.firstname.type === "minLength" && (<p>min 2 s req</p>)}
                </div>


                
                {/*<div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group font-weight-bold">
                    <label for="exampleLastname">Username</label>
                    <input type="text" name="username"
                        ref={register({ required: true, minLength: 7 })} className="form-control" id="exampleInputPassword1" placeholder="Enter your username" />
                    {errors.firstname && errors.firstname.type === "required" && (<p>this is req</p>)}
                    {errors.firstname && errors.firstname.type === "minLength" && (<p>min 7 s req</p>)}
                </div>*/}

                <div className="form-group font-weight-bold">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email"
                        ref={register({ required: true, minLength: 2 })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group font-weight-bold">
                    <label for="exampleFirstname">Mobile number</label>
                    <input type="number" name="contactnumber"
                        ref={register({ required: true, minLength: 10 })} className="form-control " id="exampleInputPassword1" placeholder="Enter your number" />
                    {errors.firstname && errors.firstname.type === "required" && (<p>this is req</p>)}
                    {errors.firstname && errors.firstname.type === "minLength" && (<p>min 10 s req</p>)}
                </div>



                <input className="btn btn-primary" type="submit" />
            </form>
        </>
    )
}
export default Form;
