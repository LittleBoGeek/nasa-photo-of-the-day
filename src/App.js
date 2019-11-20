import React,{ useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import DataComponent from '/Users/nadiachilds/Desktop/nasa-photo-of-the-day/src/DataComponent.js'

function App() {
  const [data, setData] = useState();
 useEffect(() => {
axios
.get('https://api.nasa.gov/planetary/apod?api_key=f1zYQdXy2c77HKJFj42rBJIJ3iHONnIK5qOBUcgs')
.then(results => setData (results.data))
.catch(error => console.log(error))   
 }, [])

  console.log(data)
  if (!data) return <div> Loading...</div>

  return (
    <div className="App">
     <DataComponent explanation={data.explanation} title={data.title} type ={data.media_type} url={data.url}/>
    </div>
  );
}

export default App;
