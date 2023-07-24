import { useState } from "react"


export const useForm = (initialState) =>{
    const [form,setForm] = useState(initialState)

    const onChange = (event) => {
        const { name, value } = event.target; 
        setForm({ ...form, [name]: value }); 
    };

    //Depois faz um clear para limpar os inputs quando enviado

    return { form, onChange}
}