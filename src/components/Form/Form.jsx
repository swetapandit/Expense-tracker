import Button from "../button/button";
import Input from "../input/input";
import './form.css'
function Form(){
    return(
        <form action="" className="frm">
        Expense Tracker
        <br />
        Item Name <br/>
        <Input/>
        <br />
        Amount <br/>
        <Input/>
        <br />
        <Button/>
        <Button/>
        </form>
    )
}

export default Form ;