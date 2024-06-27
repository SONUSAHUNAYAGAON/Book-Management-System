import { Outlet, Link } from "react-router-dom";
import "./All.css";

const Layout = () => {
  return (
    <>
      <div
        class="jumbotron jumbotron-fluid bg-white m-0 p-0 mb-0 pb-0"
        id="jumboimgbg"
      >
        <div class="container m-0 p-0">
          <h1 class="m-0 p-0 text-gray pretext">Books Management System</h1>
          <p class="lead m-0 p-0 text-center ">
            <pre className="pretext1">
              "Today a reader, tomorrow a leader." – Margaret Fuller
            </pre>
          </p>
        </div>
      </div>

      <nav class="navbar sticky-top shadow-lg rounded navbar-expand-lg bgnav text-white mt-0 pt-0">
        <a class="navbar-brand text-white" href="/">
          <img
            className="navimg"
            src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="navbar"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li class="nav-item">
              <a className="nav-link active" aria-current="page">
                <Link to="/"> Home </Link>
              </a>
            </li>

            <li class="nav-item">
              <a className="nav-link">
                <Link to="about"> About </Link>
              </a>
            </li>

            <li class="nav-item">
              <a className="nav-link">
                <Link to="insert"> Insert </Link>
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link">
                <Link to="display">Display </Link>
              </a>
            </li>

            <li class="nav-item">
              <a className="nav-link">
                <Link to="edit"> Edit </Link>
              </a>
            </li>

            <li>
              <a className="nav-link">
                <Link to="delete"> Delete </Link>
              </a>
            </li>
            <div class="dropdown">
              <button
                class="btn dropdown-toggle bgnav text-white"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Search By Book
              </button>
              <div class="dropdown-menu bgnav div">
                <Link to="name" className="nav-link">
                  Name{" "}
                </Link>

                <Link to="author" className="nav-link">
                  Author{" "}
                </Link>

                <Link to="publisher" className="nav-link">
                  Publisher{" "}
                </Link>

                <Link to="id" className="nav-link">
                  Id
                </Link>
              </div>
            </div>
          </ul>

          <form class="form-inline my-2">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success text-white my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <Outlet />

      <div className="footer m-0 ">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="first">
                <h4>
                  <i class="fa fa-cogs" aria-hidden="true">
                    Skills
                  </i>
                </h4>
                <p> Analytical Skills</p>
                <p> Problem-solving skills</p>
                <p> Critical-thinking skills</p>
                <p> Multitasking</p>
                <p> Self-motivated</p>
              </div>
            </div>

            <div className="col-md-4 col-xs-12">
              <div className="second">
                <h4>
                  <i class="fa-solid fa-location-dot"></i> Navigate
                </h4>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4 col-xs-12">
              <div className="third">
                <h4>
                  <i class="fa-solid fa-id-card"></i> Contact
                </h4>
                <ul>
                  <li>
                    <i class="fa-solid fa-user"></i> Sonu Sahu
                  </li>

                  <li>
                    <i className="far fa-envelope"></i> Cybrom Technology PVT.
                    LTD.
                  </li>
                  <li>
                    <i className="far fa-envelope"></i> sonusahu3715@gmail.com
                  </li>

                  <li>
                    <i className="fas fa-map-marker-alt"></i> Bhopal, India
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="line"></div>
              <div className="second2">
                <a href="/" target="_blank">
                  <i className="fab fa-codepen fa-2x margin"></i>
                </a>
                <a href="https://github.com/SONUSAHUNAYAGAON" target="_blank">
                  <i className="fab fa-github fa-2x margin"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sonu-sahu-nayagaon/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin fa-2x margin"></i>
                </a>
                <a href="https://youtube.com/" target="_blank">
                  <i className="fab fa-youtube fa-2x margin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-0 pb-4">
          <div className="row">
            <div className="col text-center text-white">
              &copy;&trade; Sonu Sahu.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
