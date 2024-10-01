import React,{useDebugValue, useState} from "react";

function useFormFields (){
    const [fields,setFields]=useState()
    const handleChange = (e)=>{
        const {target} = e
        setFields({...fields,[target.name]:target.value})
    }
    useDebugValue(fields)
    return [fields,handleChange]
}
export default useFormFields