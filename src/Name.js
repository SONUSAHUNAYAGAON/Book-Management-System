import{useState} from "react";
import axios from "axios";
const Name=()=>
{
const [input,setInput]=useState("");

const [mydata,setMydata]=useState([]);

const recordSearch=()=>
{
	axios.get(`http://localhost:5000/Book_Keeping_System/?book=${input}`)
	.then((res)=>{setMydata(res.data)});
	console.log(mydata);
}

	return(
		<>
		  <center>
		<h1 class="bg-success text-white container">Welcome to search record of Books by Name</h1>
		<br />

		<h2> Enter Book Name:</h2><input class="form-control mr-sm-2 col-2" type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
<br /><button onClick={recordSearch} class="btn btn-outline-success mb-4 mt-2 my-sm-0" >Search Record</button>




		  </center>
 
{mydata.map((key)=><h3> 
<center> 
  

<table class="table mt-4">
              <thead className="bg-primary text-white">
                <tr class="row ml-2">
                  <th class="col-2">#ID</th>
                  <th class="col-2">Book</th>
                  <th class="col-3">Author</th>
                  <th class="col-2">Publisher</th>
                  <th class="col-2">price</th>
                </tr>
              </thead>
            </table>
  
  
  <table class="table">
              <thead className="">
                <tr class="row ml-2">
                  <th class="col-2">{key.id}</th>
                  <th class="col-2">{key.book}</th>
                  <th class="col-3">{key.author}</th>
                  <th class="col-2">{key.publisher}</th>
                  <th class="col-2">{key.price}</th>
                </tr>
              </thead>
            </table>
  </center> 
	 </h3>)}


<div class="container mt-4">
<div class="row">
<div class="col-1 mb-4"></div>
<div class="card col-3 mr-5 mb-4" >
  <img class="card-img-top" src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" height="300px" />
  <div class="card-body">
    <h5 class="card-title">Book Name:</h5>
    <h3 class="card-text">Dhoni .</h3>
    <a href="#" class="btn btn-primary">Price &#8377;25</a>
  </div>
</div>
<div class="card col-3 mr-5 mb-4" >
  <img class="card-img-top" src="https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" height="300px" />
  <div class="card-body">
    <h5 class="card-title">Book Name:</h5>
    <h3 class="card-text">Dhoni .</h3>
    <a href="#" class="btn btn-primary">Price &#8377;25</a>
  </div>
</div>
<div class="card col-3 mr-5 mb-4" >
  <img class="card-img-top" src="https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" height="300px" />
  <div class="card-body">
    <h5 class="card-title">Book Name:</h5>
    <h3 class="card-text">Dhoni .</h3>
    <a href="#" class="btn btn-primary">Price &#8377;25</a>
  </div>
</div>
</div>



<div class="row">
<div class="col-1 mb-4"></div>
<div class="card col-3 mr-5 mb-4" >
  <img class="card-img-top" src="https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" height="300px" />
  <div class="card-body">
    <h5 class="card-title">Book Name:</h5>
    <h3 class="card-text">Dhoni .</h3>
    <a href="#" class="btn btn-primary">Price &#8377;25</a>
  </div>
</div>
<div class="card col-3 mr-5 mb-4" >
  <img class="card-img-top" src="https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" height="300px" />
  <div class="card-body">
    <h5 class="card-title">Book Name:</h5>
    <h3 class="card-text">Dhoni .</h3>
    <a href="#" class="btn btn-primary">Price &#8377;25</a>
  </div>
</div>
<div class="card col-3 mr-5 mb-4" >
  <img class="card-img-top" src="https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" height="300px" />
  <div class="card-body">
    <h5 class="card-title">Book Name:</h5>
    <h3 class="card-text">Dhoni .</h3>
    <a href="#" class="btn btn-primary">Price &#8377;25</a>
  </div>
</div>
</div>





<div class="row">
<div class="col-1 mb-4"></div>
<div class="card col-3 mr-5 mb-4" >
  <img class="card-img-top" src="https://images.pexels.com/photos/1018136/pexels-photo-1018136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" height="300px" />
  <div class="card-body">
    <h5 class="card-title">Book Name:</h5>
    <h3 class="card-text">Dhoni .</h3>
    <a href="#" class="btn btn-primary">Price &#8377;25</a>
  </div>
</div>
<div class="card col-3 mr-5 mb-4" >
  <img class="card-img-top" src="https://images.pexels.com/photos/1018136/pexels-photo-1018136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" height="300px" />
  <div class="card-body">
    <h5 class="card-title">Book Name:</h5>
    <h3 class="card-text">Dhoni .</h3>
    <a href="#" class="btn btn-primary">Price &#8377;25</a>
  </div>
</div>
<div class="card col-3 mr-5 mb-4" >
  <img class="card-img-top" src="https://images.pexels.com/photos/1018136/pexels-photo-1018136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image cap" height="300px" />
  <div class="card-body">
    <h5 class="card-title">Book Name:</h5>
    <h3 class="card-text">Dhoni .</h3>
    <a href="#" class="btn btn-primary">Price &#8377;25</a>
  </div>
</div>
</div>

</div>
  </>
		);
}
export default Name;