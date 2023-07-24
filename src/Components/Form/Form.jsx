


export const Form = (props) =>{
    

    return(
        <>
          <label>{props.title}</label>
          <input 
          name={props.name}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          style={{borderBlockColor:"black"}}
          type={props.type}
          placeholder={props.placeholder}
          required
          />
        </>
    )
}