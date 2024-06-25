import{useState , useEffect} from "react";
import axios from "axios";

const Insert=()=>
{
const [input , setInput]=useState({});

const handleInput=(e)=>
{
	let name=e.target.name;
	let value=e.target.value;

   setInput(values=>({...values, [name]:value}) );
   
}

const handleSubmit=(e)=>
{
	e.preventDefault();
	axios.post("http://localhost:5000/Book_Keeping_System", input)
	.then((res)=>{alert("data save!!")});
}
	return(
		<>		
		  <center>
		<h1 class="bg-primary text-white container">Insert Book Data</h1> 
		  </center>
		  <center>
		<form onSubmit={handleSubmit}>

		Enter Book Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="book" value={input.book} onChange={handleInput} />
		<br /><br />
		Enter Author Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="author" value={input.author} onChange={handleInput}  />
		<br /><br />
		Enter Publisher Name:&nbsp;<input type="text"name="publisher" value={input.publisher} onChange={handleInput}  />
		<br /><br />
		Enter Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		&nbsp;<input type="text"name="price" value={input.price} onChange={handleInput}  />
		<br /><br />
		<input class="mb-4" type="submit" value="save data" />
    </form>
    </center>
  </>
		);
}
export default Insert;