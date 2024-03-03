import * as React from 'react';
const welcome={
  greeting:"hey" ,
  title : "react" ,

};
//function App(){
 // return(
 //   <div>
  //    <h1>
  //      {welcome.greeting} {welcome.title}
//</h1>
 //     <label htmlFor="search">search:</label>
 //     <input id="search" type="text"></input>
 //   </div>
 // ) 
//}
//export default App;
const list =[
  {
  title : "react",
  url : "https://ut.uvt.tn/pluginfile.php/2292928/mod_resource/content/0/W3_Activity_React_List.pdf",
  author: "Mayssam", 
  objectId :4, 
  num_comments :2, 
  points :0,
  },
  {
    title : "redux",
    url : "https://ut.uvt.tn/pluginfile.php/2292928/mod_resource/content/0/W3_Activity_React_List.pdf",
    author : "malek",
    objectId :5,
    num_comments :6,
    points :3,
  },
]
function App(){
  return (
    <div>
      <h1>my hacker stories</h1>
      <label htmlFor='search'>search:</label>
      <input id="search" type="text" />
      <hr/>
     <ul>
       {list.map(function(item){
       return <li key={item.objectId}>{item.title}</li>;
})}
     </ul>
</div>
  );

}
export default App; 









