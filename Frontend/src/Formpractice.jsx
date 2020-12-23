import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        axios.post("http://localhost:4000/", data)
        console.log(data)

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input

                type="text"
                placeholder="fname"
                name="firstname"
                ref={register({ required: true, minLength: 2 })}
            />
            {errors.firstname && errors.firstname.type === "required" && (<p>this is req</p>)}
            {errors.firstname && errors.firstname.type === "minLength" && (<p>min 2 s req</p>)}

            <input

                type="text"
                placeholder="lname"

                name="lastname"
                ref={register({ required: true, minLength: 2 })}
            />
            {errors.firstname && errors.firstname.type === "required" && (<p>this is req</p>)}
            {errors.firstname && errors.firstname.type === "minLength" && (<p>min 2 s req</p>)}

            <input

                type="text"
                placeholder="uname"
                name="username"
                ref={register({ required: true, minLength: 7 })}
            />
            {errors.firstname && errors.firstname.type === "required" && (<p>this is req</p>)}
            {errors.firstname && errors.firstname.type === "minLength" && (<p>min 7 s req</p>)}

            <input

                type="email"
                placeholder="email"
                name="email"
                ref={register({ required: true, minLength: 2 })}
            />
            {errors.firstname && errors.firstname.type === "required" && (<p>this is req</p>)}
            

            <input

                type="text"
                placeholder="numb"
                name="contactnumber"
                ref={register({ required: true, minLength: 10 })}
            />
            {errors.firstname && errors.firstname.type === "required" && (<p>this is req</p>)}
            {errors.firstname && errors.firstname.type === "minLength" && (<p>min 10 s req</p>)}

            <input type="submit" />
        </form>
    );
}