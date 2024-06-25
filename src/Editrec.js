import {useState , useEffect} from "react";
import React from "react";
import {useParams} from "react-router-dom";
import axios from "axios";


const Editrec=()=>
{
let {id} = useParams();
const [mydata, setMydata]=useState({
     book:"",
     author:"",
     publisher:"",
     price:""
});
const loaddata=()=>
{
	axios.get(`http://localhost:5000/Book_Keeping_System/${id}`)
	.then((res)=>{setMydata(res.data)});
}
useEffect(()=>{
	loaddata();
}, []);

const handleInput=(e)=>
{
	let name=e.target.name;
	let value=e.target.value;

   setMydata({...mydata, [name]:value} );
}

   const updateSave=()=>
      {
	axios.put(`http://localhost:5000/Book_Keeping_System/${id}`, mydata)
	.then((res)=>{alert("record updated!!")});
}
return(
<>  


<center className="m-0">
	<div className="bg-primary pb-4 m-0">
<h1>Enter your record</h1>
     Enter Book Name:<input type="text" name="book" value={mydata.book} onChange={handleInput} />
		<br /><br />
		Enter Author Name:<input type="text" name="author" value={mydata.author} onChange={handleInput}  />
		<br /><br />
		Enter Publisher Name:<input type="text" name="publisher" value={mydata.publisher} onChange={handleInput}  />
		<br /><br />
		Enter Price:<input type="text" name="price" value={mydata.price} onChange={handleInput}  />
		<br /><br />
		<button className="btn " onClick={updateSave}>update Save</button>
		</div>
		</center>


</>

	);
}


export default Editrec;