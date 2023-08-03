import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseCarts = () => {
const {user} = useContext(AuthContext);
const [carts, setCarts] = useState();
const [loading , setLoading] = useState(true);

useEffect(()=>{
    fetch(`http://localhost:7700/carts`)
    .then(res => res.json())
    .then(data =>{
        setCarts(data);
        setLoading(false);
    })
},[])

    return [carts, loading];
};

export default UseCarts;