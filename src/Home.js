import "./All.css";
const Home = () => {
  return (
    <>
      <div id="myslider" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="imgsld"
              src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg"
              alt="slider1"
            />
            <div class="carousel-caption ">
              <h1>Books</h1>
              <p>
                A book is a medium for recording information in the form of
                writing or images, typically composed of many pages bound
                together and protected by a cover. The technical term for this
                physical arrangement is codex.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              class="imgsld"
              src="https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766_1280.jpg"
              alt="slider1"
            />
            <div class="carousel-caption">
              <h1>Books</h1>
              <p>
                A book is a medium for recording information in the form of
                writing or images, typically composed of many pages bound
                together and protected by a cover. The technical term for this
                physical arrangement is codex.
              </p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              class="imgsld"
              src="https://cdn.pixabay.com/photo/2016/11/23/14/53/man-1853348_1280.jpg"
              alt="slider1"
            />
            <div class="carousel-caption">
              <h1>Books</h1>
              <p>
                A book is a medium for recording information in the form of
                writing or images, typically composed of many pages bound
                together and protected by a cover. The technical term for this
                physical arrangement is codex.
              </p>
            </div>
          </div>
        </div>
        <a href="#myslider" class="carousel-control-prev" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a href="#myslider" class="carousel-control-next" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
        <ul class="carousel-indicators">
          <li data-target="#myslider" class="active" data-slide-to="0"></li>
          <li data-target="#myslider" data-slide-to="1"></li>
          <li data-target="#myslider" data-slide-to="2"></li>
        </ul>
      </div>

      <section className="container py-5">
        <div className="row py-4">
          <div className="col-4">
            <div class="card">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/30/10/03/book-2020460_1280.jpg"
                class="card-img-top carimg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img
                src="https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg"
                class="card-img-top carimg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img
                src="https://media.istockphoto.com/id/93262172/photo/two-opened-old-atlas-book-on-the-spread-map.jpg?s=612x612&w=is&k=20&c=V2J_FUBKgcUKwD9fJmPJ_IEOzcKGy8WuJcbUJXNVFoM="
                class="card-img-top carimg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-4">
            <div class="card">
              <img
                src="https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg"
                class="card-img-top carimg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img
                src="https://cdn.pixabay.com/photo/2015/05/11/14/51/heart-762564_1280.jpg"
                class="card-img-top carimg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card">
              <img
                src="https://cdn.pixabay.com/photo/2018/02/23/22/04/book-bindings-3176776__480.jpg"
                class="card-img-top carimg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
