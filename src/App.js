import React, { useEffect, useState} from "react"
import Record from "./fetchrecords";
import './App.css'

const App = () => {
   
  const searchcategory = "food";
   
  const category = 'https://api.chucknorris.io/jokes/random?category={searchcategory}';
  const [records, getrecords] = useState(['']);
  const [search, getsearch] = useState("");
  useEffect(() => {
    getitems();
  }, []);
  const getitems = async () => {
    const response = await fetch (`https://api.chucknorris.io/jokes/random?category=${searchcategory}`);
    const data = await response.json();
    console.log(data);
    getrecords(data);
  }
  return (
     <div className="maincontent">
       <form action="" method="post">
         <center><span>search here by category </span></center>
         <hr/>
         <input type="text" className="inputbox" value={search} />
         <button type="submit" className="submitbtn">Request Data</button>
       </form>

        
       <div className="results">
         <Record  idnumber={records.id} iconurl={records.icon_url} value={records.value} dateinserted={records.created_at} dateupdated={records.created_at} />
        
       </div>
     </div>
  );
}
export default App;

