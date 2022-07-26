import './Displaydetails.css';

const Displaydetails = (props) => {
  console.log(props.details);
  const display = props.details.map((data) => (
<section className="productContainer">
       <span>{data.name} </span>
       <span>{data.amount}</span>
       <span>{data.date} </span>

       <span>{data.type}</span>
    
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
