// import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./nav-bar/nav";
import React from "react";
import Content from "./right-content/content";
import Card from "./Card/card";
import Retro from "./img/image-retro-pcs.jpg";
import Laptop from "./img/image-top-laptops.jpg";
import Gaming from "./img/image-gaming-growth.jpg";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div>
      <div className="overlay hidden"></div>
      <Nav />
      <main>
        <aside className="main-text">
          <div className="lg-img"></div>
          <div className="text">
            <div className="bold">
              <h1> The Bright Future of Web 3.0? </h1>
            </div>
            <div className="text-content">
              <p>
                We dive into the next evolution of the web that claims to put
                power of the platforms back into the hands of the people. But is
                it really fufilling its promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </aside>
        <aside className="right-text">
          <div className="right-content">
            {" "}
            <h2>New</h2>
            <Content
              name="Hydrogen vs Electric Cars"
              info="Will hydrogen fueled-cars ever catch up to EVs?"
              status={true}
            />
            <Content
              name="The Downsides of AI Artistry"
              info="What are the possible adverse effects of on-demand AI image generation?"
              status={true}
            />
            <Content
              name="Is VC Funding Drying Up?"
              info="Private funding by VC firms is down 50% YOY. We take a look at what that means"
              status={false}
            />
          </div>
        </aside>
      </main>
      <section>
        <Card
          img={Retro}
          number="01"
          title="Reviving Retro PCs"
          words="What happens when old PCs are given modern upgrades?"
        />
        <Card
          img={Laptop}
          number="02"
          title="Top 10 Laptops of 2022"
          words="Our best picks for various needs and budgets."
        />
        <Card
          img={Gaming}
          number="03"
          title="The Growth of Gaming"
          words="How the pandemic has sparked fresh opportunities."
        />
      </section>
    </div>
  );
}

export default App;
// props
// function Person(props) {
//   return (
//     <>
//       <div className="info">
//         <>
//           <p>Name : {props.name}</p>
//           <p>Age: {props.age}</p>
//           <p>status: {props.status}</p>
//         </>
//       </div>
//     </>
//   );
// }

// function App() {
//   const [counter, setCounter] = useState(0);
//   // const isNameShowing = false;
//   // const name = "Mike ";
//   useEffect(() => {
//     const arr = ["pink", "brown", "purple", "blue", "red"];
//     document.querySelector("body").style.color =
//       arr[Math.trunc(Math.random() * arr.length) + 1];
//   }, [counter]);
//   return (
//     <div className="App">
//       {/* React State */}
//       <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
//         +
//       </button>
//       <h1 className="head">{counter}</h1>
//       <button
//         onClick={() => {
//           setCounter((prevCounter) => prevCounter - 1);
//         }}
//       >
//         -
//       </button>

//       {/* <Person name="John" age={30} status="married" />
//       <Person name="Sarah" status="single" age={24 - 3} />
//       <Person /> */}

//       {/* <p>{isNameShowing ? "Hello john" : "Invalid Name"} </p> */}
//       {/* React fragment <></> */}
//       {/* {name ? (
//         <>
//           <p>{name}</p>
//         </>
//       ) : (
//         <>
//           <p>There is no name</p>
//           <h3>Try again</h3>
//         </>
//       )} */}
//     </div>
//   );
// }

// export default App;
