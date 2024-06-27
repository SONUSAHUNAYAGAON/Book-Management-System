import { useState, useEffect } from "react";
import axios from "axios";

const Display = () => {
  const [record, setRecord] = useState([]);

  const loaddata = () => {
    axios
      .get(`${process.env.REACT_APP_JSON_API}`)
      .then((res) => setRecord(res.data));
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <>
      <center>
        <h1 class="bg-success text-white container">display record</h1>
        <table class="table">
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

      {record.map((key) => (
        <table class="table">
          <tbody>
            <tr className="row ml-2">
              <td className="col-2">{key.id}</td>
              <td className="col-2">{key.book}</td>
              <td className="col-3">{key.author}</td>
              <td className="col-2">{key.publisher}</td>
              <td class="col-2">{key.price} </td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};
export default Display;
