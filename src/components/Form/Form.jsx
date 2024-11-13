import Button from "../button/button";
import Input from "../input/input";
import './form.css'
function Form(){
    return(
        <form action="" className="frm">
        Expense Tracker
 
        Item Name
        <Input/>

        Amount 
        <Input/>
        
        <Button/>
        <Button/>
        </form>
    )
}

export default Form ;