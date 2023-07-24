import { Form } from "../../Components/Form/Form"
import { useForm } from "../../Hooks/useForm"
import signup from "../../assets/personage/cadastro.png"

export const SignUpPage = () =>{
    const {form, onChange} = useForm ({name:'',email:'',password:'', confirmPassword:''})

    const sendLogin = (e) =>{
        e.preventDefault()

        //Confirmação para ir para API
        if(form.password === form.confirmPassword){
            console.log("ok")
        }else{
            alert("Senhas incompativeis")
        }
    }



    return(
        <section>
            <img src={signup}  />
            <div>
                <h1>Entrar</h1>
                <form onSubmit={sendLogin}>
                   <Form
                    value={form.name} 
                    onChange={onChange} 
                    title="Name" 
                    name="name" 
                    type="text" 
                    placeholder="User" />
                    
                    <Form
                    value={form.email} 
                    onChange={onChange} 
                    title="Email" 
                    name="email" 
                    type="email" 
                    placeholder="username@gmail.com" />

                    <Form 
                    value={form.password} 
                    onChange={onChange} 
                    title="Senha" 
                    name="password" 
                    id="password"
                    type="password" 
                    placeholder="********"/>

                <Form 
                    value={form.confirmPassword} 
                    onChange={onChange} 
                    on
                    title="Confirmação da Senha" 
                    name="confirmPassword" 
                    id="confirmPassword"
                    type="password" 
                    placeholder="********"/>
                    
                    <button>Enviar</button>
                </form>
            </div>
        </section>
    )
}