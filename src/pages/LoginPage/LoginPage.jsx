import { Form } from "../../Components/Form/Form"
import { useForm } from "../../Hooks/useForm"
import login from "../../assets/personage/login.png"
import { Link } from "react-router-dom";


export const LoginPage = () =>{
    const {form, onChange} = useForm ({email:'',password:''})

    const sendLogin = (e) =>{
        e.preventDefault()
        console.log(e.target)
    }

    console.log()
    return(
        <section>
            <img src={cad}  />
            <div>
                <h1>Entrar</h1>
                <form onSubmit={sendLogin}>
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
                    
                    <button >Enviar</button>
                </form>
                <Link to="/cadastro" >Fazer minha conta</Link>
            </div>
        </section>
    )
}