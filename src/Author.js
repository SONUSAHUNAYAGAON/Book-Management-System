import { useState } from "react";
import axios from "axios";
const Author = () => {
  const [input, setInput] = useState("");

  const [mydata, setMydata] = useState([]);

  const recordSearch = () => {
    axios
      .get(`${process.env.REACT_APP_JSON_API}/?author=${input}`)
      .then((res) => {
        setMydata(res.data);
      });
    console.log(mydata);
  };

  return (
    <>
      <center>
        <h1 class="bg-success text-white container">
          Welcome to search record of Author
        </h1>
        <br />
        <h2>Enter Author Name:</h2>
        <input
          class="form-control mr-sm-2 col-2"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <button onClick={recordSearch} class="btn btn-outline-success mb-5">
          Search Record
        </button>
      </center>

      {mydata.map((key) => (
        <h3>
          <center>
            {" "}
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
        </h3>
      ))}
    </>
  );
};

export default Author;
