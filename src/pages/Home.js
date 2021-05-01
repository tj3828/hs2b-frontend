import React from 'react';
import {Carousel} from "react-bootstrap";
import ContentsLayout from "../css/ContentsLayout";



const Home = () => {
  return (
    <ContentsLayout className="container">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="my-4">Shop Name</h1>
          <div className="list-group">
            <a className="list-group-item" href="#!">Category 1</a>
            <a className="list-group-item" href="#!">Category 2</a>
            <a className="list-group-item" href="#!">Category 3</a>
          </div>
        </div>
        <div className="col-lg-9">
          <Carousel className="my-4">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/900x350"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/900x350"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/900x350"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#!"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="..."/></a>
                <div className="card-body">
                  <h4 className="card-title"><a href="#!">Item One</a></h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                    aspernatur!</p>
                </div>
                <div className="card-footer"><small className="text-muted">★ ★ ★ ★ ☆</small></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#!"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="..."/></a>
                <div className="card-body">
                  <h4 className="card-title"><a href="#!">Item Two</a></h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                    aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-footer"><small className="text-muted">★ ★ ★ ★ ☆</small></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#!"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="..."/></a>
                <div className="card-body">
                  <h4 className="card-title"><a href="#!">Item Three</a></h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                    aspernatur!</p>
                </div>
                <div className="card-footer"><small className="text-muted">★ ★ ★ ★ ☆</small></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#!"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="..."/></a>
                <div className="card-body">
                  <h4 className="card-title"><a href="#!">Item Four</a></h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                    aspernatur!</p>
                </div>
                <div className="card-footer"><small className="text-muted">★ ★ ★ ★ ☆</small></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#!"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="..."/></a>
                <div className="card-body">
                  <h4 className="card-title"><a href="#!">Item Five</a></h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                    aspernatur! Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="card-footer"><small className="text-muted">★ ★ ★ ★ ☆</small></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="#!"><img className="card-img-top" src="https://via.placeholder.com/700x400" alt="..."/></a>
                <div className="card-body">
                  <h4 className="card-title"><a href="#!">Item Six</a></h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam
                    aspernatur!</p>
                </div>
                <div className="card-footer"><small className="text-muted">★ ★ ★ ★ ☆</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentsLayout>
  );
};

export default Home;