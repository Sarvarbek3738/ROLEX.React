import { useState } from 'react'
import './App.css'


function App() {


  const [mode, setMode] = useState(JSON.parse(localStorage.getItem("dark")) ? JSON.parse(localStorage.getItem("dark")) : false);
  localStorage.setItem("dark", JSON.stringify(mode));


  const [featured, setFeatured] = useState([
    {
      id: 0,
      img: "/imgs/featured1 1.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "",
      new: false,
      title: "JAZZMASTER",
      price: "$1050",
    },
    {
      id: 1,

      img: "/imgs/1-2.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "INGERSOLL",
      price: "$250",
    },
    {
      id: 2,
      img: "/imgs/1-1.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "ROSE GOLD",
      price: "$890",
    },
  ]);
  const [PRODUCTS, setPRODUCTS] = useState([
    {
      id: 0,
      img: "/imgs/3-1.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "JAZZMASTER",
      price: "$1050",
    },
    {
      id: 1,
      img: "/imgs/3-3.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "INGERSOLL",
      price: "$250",
    },
    {
      id: 2,
      img: "/imgs/3-4.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "ROSE GOLD",
      price: "$890",
    },
    {
      id: 3,
      img: "/imgs/3-5.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "JAZZMASTER",
      price: "$1050",
    },
    {
      id: 4,
      img: "/imgs/3-1.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "INGERSOLL",
      price: "$250",
    },
    {
      id: 5,
      img: "/imgs/3-5.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "ROSE GOLD",
      price: "$890",
    },
  ]);

  const [ARRIVALS, setARRIVALS] = useState([
    {
      id: 0,
      img: "/imgs/5-1.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "JAZZMASTER",
      price: "$1050",
    },
    {
      id: 1,
      img: "/imgs/5-2.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "INGERSOLL",
      price: "$250",
    },
    {
      id: 2,
      img: "/imgs/5-3.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "ROSE GOLD",
      price: "$890",
    },
    {
      id: 3,
      img: "/imgs/5-4.png",
      deck: "Lorem ipsum dolor sit amet, consectetur  adipisicing elit. Accusantium voluptas reiciendis tenetur est rem rerum modi corporis assumenda minima maiores.",
      sale: "/imgs/Sale.svg",
      new: false,
      title: "ROSE GOLD",
      price: "$890",
    },
  ]);

  const [oneProdact, setOneProdact] = useState(null)

  const [menu, setMenu] = useState(false)

  return (
    < >
      <div>
        <header className={mode ? "dark " : ""}>
          {oneProdact && (
            <div className="umumiyMadal" >
              <div className="container">

                <div>
                  <h1>{oneProdact?.title}</h1>
                  <p>{oneProdact?.deck}</p>
                  <h2>{oneProdact?.price}</h2>
                  <button onClick={() => {
                    setOneProdact(null)
                  }}>
                    EXIT
                  </button>
                  <button className='ModalBtn'>
                    ADD
                  </button>
                </div>
                <div>
                  <img src={oneProdact?.img} alt="" />
                </div>
              </div>
            </div>
          )}

          <div className="madaloynalar">
            <div className="container">
              <div id="menu" className={menu ? "menu hidden " : "menu "} >
                <div id="close-menu" onClick={() => {
                  setMenu(false)
                }}>
                  <i class="fa-solid fa-xmark"></i>
                </div>
                <h1>HOME</h1>
                <h1>FEATURED</h1>
                <h1>PRODUCTS</h1>
                <h1>NEW</h1>
              </div>
            </div>
          </div>
          <nav>
            <div className="container">
              <div className="logo1">
                <div className="logo">
                  <img className="logo2" src="/imgs/Logo header.svg" alt="" />
                  <img className="logo3" src="/imgs/Logo header (1).svg" alt="" />
                </div>
                <ul className="link">
                  <li><a href="">Home</a></li>
                  <li><a href="">Featured</a></li>
                  <li><a href="">Products</a></li>
                  <li><a href="">New</a></li>
                </ul>
              </div>
              <div className="KunTun">
              </div>
            </div>
          </nav>
          <div className="hero">
            <div className="container">

              <div className="apple">
                <div className="IchtimoiTarmoqlar">
                  <img src="/imgs/Social home.svg" alt="" />
                </div>
                <div className="HeroBox">
                  <h1>
                    NEW WATCH <br />
                    COLLECTIONS B720
                  </h1>
                  <p>
                    Latest arrival of the new imported watches of the <br /> B720 series, with a modern and
                    resistant
                    design.
                  </p>
                  <h2>
                    $1245
                  </h2>
                  <div className="btn">
                    <button className="btn1">Discover</button>
                    <button>ADD TO CART</button>

                  </div>
                </div>
              </div>

              <div className="img">
                <img className="imgs1" src="/imgs/Home img (1).png" alt="" />
                <img className="imgs2" src="/imgs/hero media.png" alt="" />
              </div>

              <div className="KunTun cin" >
                <div className="oyquyosh" onClick={() => {
                  setMode(!mode)
                }}><img className="moon" src="/imgs/bx-moon.svg.svg" alt="" />
                  <img className="quyosh" src="/imgs/quyosh.svg" alt="" /></div>
                <div><img src="/imgs/bx-shopping-bag.svg.svg" alt="" /></div>
                <div id="toggle-menu" onClick={() => {
                  setMenu(true)
                }}>
                  <img src="/imgs/madal.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <section className="section1">
              <div className="container">
                <div className="chiziq"></div>
                <h1>FEATURED</h1>
                <div className="section1box">
                  {
                    featured?.map((item) => {
                      return (
                        <div className="box1"
                          onClick={() => {
                            setOneProdact(item)
                          }}>
                          <div className="sale">
                            <img src={item.sale} alt="" />
                          </div>
                          <img src={item.img} alt="" />
                          <h3>{item.title}</h3>
                          <h4>{item.price}</h4>
                          <button>ADD TO CART</button>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>
            <section className="section2">
              <div className="container">
                <div className="box2">
                  <div className="box2-1">
                    <img src="/imgs/Img story.jpg" alt="" />
                  </div>
                  <div className="box2-2">
                    <div className="chiziq2"></div>
                    <h3>OUR STORY</h3>
                    <h1>Inspirational Watch of <br />
                      this year</h1>
                    <p>
                      The latest and modern watches of this year, is <br /> available in various presentations in
                      this store, <br /> discover them now.
                    </p>
                    <button>Discover</button>
                  </div>
                </div>
              </div>
            </section>
            <section className="section3">
              <div className="container">
                <div className="chiziq"></div>
                <h1>PRODUCTS</h1>
                <div className="section3box">
                  {
                    PRODUCTS?.map((item) => {
                      return (
                        <div className="box3" onClick={() => {
                          setOneProdact(item)
                        }}>
                          <img src={item.img} alt="" />

                          <h3>{item.title}</h3>
                          <h4>{item.price}</h4>
                          <div className="icon">
                            <img src="/imgs/Button product (1).svg" alt="" />
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </section>
            <section className="section4">
              <div className="container">
                <div className="box4">
                  <div className="box4-1">
                    <img src="/imgs/bxs-quote-alt-le /ft.svg.svg" alt="" />
                    <h1>
                      They are the best watches that one acquires, <br /> also they are always with the latest news
                      and <br />
                      trends, with a very comfortable price and <br /> especially with the attention you receive,
                      they <br />
                      are always attentive to your questions.
                    </h1>
                    <h1>

                    </h1>
                    <h5>March 27. 2021</h5>
                    <div className="mualif">
                      <div>
                        <img src="/imgs/testimonial1 1.svg" alt="" />
                      </div>
                      <div>
                        <h6>Lee Doe</h6>
                        <p>Director of a company</p>
                      </div>

                    </div>
                    <div className="ChapOng">
                      <div>
                        <img src="/imgs/bx-left-arrow-alt.sv /g.svg" alt="" />
                      </div>
                      <div>
                        <img src="/imgs/bx-right-arrow-alt.sv /g.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="box4-2">
                    <img src="/imgs/Img testimonial.png" alt="" />
                  </div>
                </div>
              </div>
            </section>
            <section className="section5">
              <div className="container">


                <div className="chiziq"></div>
                <h1>NEW ARRIVALS</h1>
                <div className="section5box">
                  {
                    ARRIVALS?.map((item) => {
                      return (
                        <div className="box5" onClick={() => {
                          setOneProdact(item)
                        }}>
                          <div className="new">
                            <p>NEW</p>
                          </div>
                          <img src={item.img} alt="" />

                          <h3>{item.title}</h3>
                          <h4>{item.price}</h4>
                          <button>ADD TO CART</button>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </section>
            <section className="section6">
              <div className="container">
                <div className="box6">
                  <div className="box6-1">
                    <h1>Subscribe Our <br />
                      Newsletter
                    </h1>
                    <p>
                      Don't miss out on your discounts. Subscribe to our email <br /> newsletter to get the best
                      offers,
                      discounts, coupons, gifts <br /> and much more.
                    </p>
                  </div>
                  <div className="box6-2">
                    <form action="">
                      <div> <input type="text" placeholder="Enter your email" /></div>
                      <div><button>
                        SUBSCRIBE
                      </button></div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <footer>
            <div className="container">
              <div className="footerBox">
                <div>
                  <h3>Our information</h3>
                  <p>1234 - Peru</p>
                  <p>La Libertad 43210</p>
                  <p>123-456-789</p>
                </div>
                <div>
                  <h3>About Us</h3>
                  <p>Support Center</p>
                  <p>Customer Support</p>
                  <p>About Us</p>
                  <p>Copy Right</p>
                </div>
                <div>
                  <h3>Product</h3>
                  <p>Road bikes</p>
                  <p>Mountain bikes</p>
                  <p>Electric</p>
                  <p>Accesories</p>
                </div>
                <div>
                  <h3>Social</h3>
                  <i className="fa-br /ands fa-facebook"></i>
                  <i className="fa-br /ands fa-twitter"></i>
                  <i className="fa-br /ands fa-instagram"></i>
                </div>
              </div>
              <div className="oxiri">

              </div>
              <h6>© Bedimcode. All rigths reserved</h6>
            </div>

          </footer>
        </header>

      </div>
    </>
  )
}

export default App
