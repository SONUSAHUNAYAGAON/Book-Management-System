import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Edit = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = () => {
    axios.get(`${process.env.REACT_APP_JSON_API}`).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <center>
        <h1 class="bg-success text-white container">Edit Book data</h1>
      </center>
      {mydata.map((key) => (
        <center>
          <table class="table ml-5">
            <tr className="row">
              <td className="col-2">{key.id}</td>
              <td className="col-2">{key.book}</td>
              <td className="col-2">{key.author}</td>
              <td className="col-2">{key.publisher}</td>
              <td className="col-2">{key.price}</td>
              <td class="col-2 ">
                {" "}
                <Link to={`/Editreco/${key.id}`}>
                  <button className="btn btn-outline-info text-body">
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                </Link>
              </td>
            </tr>
          </table>
        </center>
      ))}
    </>
  );
};
export default Edit;
