import { useState, useEffect } from "react";
import axios from "axios";
const Delete = () => {
  const [mydata, setMydata] = useState([]);

  const loaddata = () => {
    axios.get(`${process.env.REACT_APP_JSON_API}`).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loaddata();
  }, []);
  const Delrec = (id) => {
    axios.delete(`${process.env.REACT_APP_JSON_API}/${id}`).then((res) => {
      alert("record delete");
    });
    loaddata();
  };

  return (
    <>
      <center>
        <h1 class="bg-success text-white container">Delete data</h1>

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
      </center>
      {mydata.map((key) => (
        <center>
          <table class="table">
            <tbody>
              <tr className="row ml-2">
                <td className="col-2">{key.id}</td>
                <td className="col-2">{key.book}</td>
                <td className="col-2">{key.author}</td>
                <td className="col-2">{key.publisher}</td>
                <td className="col-2">{key.price}</td>
                <td class="col-2 ">
                  {" "}
                  <button
                    className="btn btn-outline-info"
                    onClick={() => {
                      Delrec(key.id);
                    }}
                  >
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      ))}
    </>
  );
};
export default Delete;
