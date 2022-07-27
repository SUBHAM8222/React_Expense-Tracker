import { useEffect, useState } from "react";
import "./ExpenseForm.css";
import Displaydetails from "./Displaydetails";
import axios from "axios";
import { itemsliceactions } from "./Store.js/Index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Expensesform = () => {

  const items=useSelector(state=>state.data.items)
  console.log(items);

  const dispatch=useDispatch();

    const [type,settype]=useState();
    const[date,setdate]=useState();
    const[amount,setamount]=useState();
    const[name,setname]=useState();
    const[values,setvalues]=useState([]);
    const [change,bechange]=useState(false);
   

console.log()
    useEffect(()=>{

      const showdata=async()=>{ const data=await axios.get('https://https-react-aa6f2-default-rtdb.firebaseio.com/expense.json')

    const response=await data.data;
    console.log(response);
    const expenses=[];
    for (const key in response)
{ expenses.push({
    
  id:key,
 type:response[key].type,
 date:response[key].date,
 amount:response[key].amount,
 name:response[key].name,
})
}
  

    setvalues(expenses);
    dispatch(itemsliceactions.ReceivedData(expenses))
      
  
      }
      showdata();
     
    },[change])
const onsubmitHandler=async(event)=>{
    event.preventDefault();
bechange(state=>!state);
    

   const a={
        
        type:type,
        date:date,
        amount:amount,
        name:name,

    }

 


  axios.post('https://https-react-aa6f2-default-rtdb.firebaseio.com/expense.json',
a)


dispatch(itemsliceactions.inputData({ type:type,
  date:date,
  amount:amount,
  name:name,}));


}
const typechangehandler=(event)=>{

  

    settype(event.target.value);

}
    
const namechangehandler=(event)=>{
  
      setname(event.target.value);

}

const datechangehandler=(event)=>{
 

    setdate(event.target.value);

}

const amountchangehandler=(event)=>{
  

    setamount(event.target.value);


}
const deletehandler=(id)=>{

  axios.delete(`https://https-react-aa6f2-default-rtdb.firebaseio.com/expense/${id}.json`)

  setvalues(values.filter((value) => value.id !== id));
}
// const edithandler=(id)=>{

//   setvalues(values.filter((value) => value.id !== id));
//  const a={
        
//     type:type,
//     date:date,
//     amount:amount,
//     name:name,

// }

//   axios.put(`https://https-react-aa6f2-default-rtdb.firebaseio.com/expense/${id}.json`,
//  a )
// }

  return (

 <div>
    <div className='signupBody2' >
      <h1>Enter Your Expense</h1>
     

      <form className='details' onSubmit={onsubmitHandler}>
        <div >
          <span>Type:</span>
          <select onChange={typechangehandler}>
            <option value="card" >Card</option>
            <option value="cash" >Cash</option>
            <option value="cryptocoin" >Cryptocoin</option>
            <option value="other">Other</option>
          </select>
          <span>
          <span>Name:</span>
           <input type="text" placeholder="What did you spend on?" onChange={namechangehandler} /> 
        </span>
        </div>

        

        <div>
          <span>Date:</span> <input type="date" onChange={datechangehandler} />
        
          <span>Amount:</span> <input type="number" placeholder="How much?"onChange={amountchangehandler} />
          
        </div>
        <button type='submit' className='signupBtn'>SUBMIT</button>
       
      </form>
     
    </div>
     <Displaydetails details={values} ondelete={deletehandler} ></Displaydetails>  
    </div> 
  
 
  );
};
export default Expensesform;
