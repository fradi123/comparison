// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// // //     </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //      </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //   </>
// //   //)
// // //}

// // //export default App
// import * as React from "react";


// const list = [
//   {
//     title: "React",
//     url: "https://reactjs.org",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0,

//   },
//   {
//     title: "Redux",
//     url: "https://redux.js.org",
//     author: "Dan Abramov",
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   }
// ]

// function getTitle(title){
//   return title;
// }

// function App() {

//   return (
 
//       <div>
//         <h1> hello  {getTitle("Yassine")}</h1>
//         <ul>
//           {list.map(function (item){
//             return (
//               <li key={item.objectID}>
//                 <span>
//                   <a href={item.url}> {item.title} </a>
//                 </span>
//                 <span> {item.author} </span>
//                 <span> {item.num_comments} </span>
//                 <span> {item.points} </span>
//               </li>
//             )
//           })}
//         </ul>
//       </div>
//   )
// }

// export default App

// import * as React from "react";


// const list = [
//   {
//     title: "React",
//     url: "https://reactjs.org",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0,

//   },
//   {
//     title: "Redux",
//     url: "https://redux.js.org",
//     author: "Dan Abramov",
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   }
// ]

// function getTitle(title){
//   return title;
// }


// function List(){
//   return(
//     <ul>
//           {list.map(function (item){
//             return (
//               <li key={item.objectID}>
//                 <span>
//                   <a href={item.url}> {item.title} </a>
//                 </span>
//                 <span> {item.author} </span>
//                 <span> {item.num_comments} </span>
//                 <span> {item.points} </span>
//               </li>
//             )
//           })}
//         </ul>
//   );
// }

// function Search() {
//   return(<div>
//     <label htmlFor="search">Search: </label>
//     <input id="search" type="text" />
// </div>);
  
// }

// function App() {

//   return (
 
//       <div>
//         <h1> My Hacker-stories </h1>
//         <Search/>
//         <hr/>
//         <List/>
//       </div>
//   )
// }

// export default App
// import * as React from "react";


// const list = [
//   {
//     title: "React",
//     url: "https://reactjs.org",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0,

//   },
//   {
//     title: "Redux",
//     url: "https://redux.js.org",
//     author: "Dan Abramov",
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   }
// ]

// function getTitle(title){
//   return title;
// }


// const List = () => 
//   (
//     <ul>
//           {list.map(function (item){
//             return (
//               <li key={item.objectID}>
//                 <span>
//                   <a href={item.url}> {item.title} </a>
//                 </span>
//                 <span> {item.author} </span>
//                 <span> {item.num_comments} </span>
//                 <span> {item.points} </span>
//               </li>
//             )
//           })}
//         </ul>
//   );


// const Search = () => {

//   const handleChange = (event) => {
//     // synthetic event
//     console.log(event);
    
//     console.log(event.target.value);
//     };
    

//   return (
//     <div>
//     <label htmlFor="search">Search: </label>
//     <input id="search" type="text" onChange={handleChange} />
//   </div>
//   );

// }
  
  


 const App = () => 

   (
 
       <div>
         <h1> My Hacker-stories </h1>
         <Search/>
         <hr/>
         <List/>
       </div>
   )


 export default App

 import * as React from "react";


 const List = (props) => 
   (
     <ul>
           {props.list.map((item) => (
           <Item key={item.objectID} item={item} />
           ))}
         </ul>
   );


 const Item = (props) => (
   <li>
     <span>
         <a href={props.item.url}> {props.item.title} </a>
    </span>
   <span> {props.item.author} </span>
   <span> {props.item.num_comments} </span>
    <span> {props.item.points} </span>
   </li>
 );
 const App = () => 

  (

      <div>
        <h1> My Hacker-stories </h1>
        <Search/>
        <hr/>
        <List/>
      </div>
  )


export default App

import * as React from "react";


const List = (props) => 
  (
    <ul>
          {props.list.map((item) => (
          <Item key={item.objectID} item={item} />
          ))}
        </ul>
  );


const Item = (props) => (
  <li>
    <span>
        <a href={props.item.url}> {props.item.title} </a>
   </span>
  <span> {props.item.author} </span>
  <span> {props.item.num_comments} </span>
   <span> {props.item.points} </span>
  </li>
);

const Search = () => {

  console.log("SEARCH component RENDERED")
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    
    console.log(event);
    
    console.log(event.target.value);

    setSearchTerm(event.target.value);
    };
    

  return (
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange} />

    <p>
      Searching for <strong>{searchTerm}</strong>
    </p>
  </div>
  );

}
const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};
export default App;











