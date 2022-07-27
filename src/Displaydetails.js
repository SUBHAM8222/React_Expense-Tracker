import './Displaydetails.css';

const Displaydetails = (props) => {


 
  const display = props.details.map((data) => (
<section className="productContainer">
       <span>{data.name} </span>
       <span>{data.amount}</span>
       <span>{data.date} </span>

       <span>{data.type}</span>
       <span><button onClick={props.ondelete.bind(null,data.id)}>DELETE</button></span>
       {/* <span><button onClick={props.onedit.bind(null,data.id)}>EDIT</button></span> */}
    
     </section>
  ))
  

  return(
    <li>
      <section className="productContainer11">
    <span>NAME</span>
       <span>AMOUNT</span>
       <span>DATE</span>

       <span>TYPE</span>
    
     </section>
    {display}
    </li>
  )
 
};

export default Displaydetails;
