import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, useFormik } from "formik";

export function TrainTsk() {
    let [trains,setTrains] = useState([]);
  const [station, setStation] = useState([]);
  const [trainData, setTrainData] = useState();
  const alldata = useState(JSON.parse(localStorage.getItem("train")));
  console.log(alldata[0]);
  const [SearchData,setSearchData] = useState({
    "date":"",
    "from":"",
    "to":""
  })
  const [finalData,setFinalData] = useState([]);


  console.log(SearchData);
  
  const day = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {

    axios
      .get("./station.json")
      .then((res) => {
        setStation(res.data.station);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("./trainData.json")
      .then((res) => {
        setTrainData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      date: "",
      trainName: "",
      trainNo: "",
      from: "",
      to: "",
      day: "",
      stop: "",
      arrival: "",
      departure: "",
    },
    onSubmit: (value) => {
      trains.push(value);
      localStorage.setItem("train",JSON.stringify(value));
    },
});

function handleDate(e){
    // console.log(e.target.value);
    SearchData.date= e.target.value;
    
}
function handleFrom(e){
    // console.log(e.target.value);
    SearchData.from= e.target.value;

}
function handleTo(e){
    // console.log(e.target.value);
    SearchData.to= e.target.value;
    
}

function handleSearch(){
    console.log(SearchData);
    
    let temp =[];
   temp = alldata[0].filter((item)=>
        item.date == SearchData.date && item.from == SearchData.from && item.to == SearchData.to
    )
    setFinalData(temp);
    console.log(temp);
}


  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">Date:-</label>
          <input type="date" name="date" onChange={formik.handleChange} />
          <div>
            <label htmlFor="">Train Name:</label>
            <input
              type="text"
              onChange={formik.handleChange}
              name="trainName"
              placeholder="Train Name"
            />
            <label htmlFor="">Train No:</label>
            <input
              type="text"
              onChange={formik.handleChange}
              name="trainNo"
              placeholder="Train No"
            />
          </div>
          <div>
            <label htmlFor="">From</label>
            <select name="from" id="" onChange={formik.handleChange}>
              {station.map((item) => (
                <option>{item.stationName}</option>
              ))}
            </select>

            <label htmlFor="">To</label>
            <select name="to" onChange={formik.handleChange}>
              {station.map((item) => (
                <option>{item.stationName}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="">Day</label>
            <select name="day" onChange={formik.handleChange}>
              {day.map((val) => (
                <option>{val}</option>
              ))}
            </select>
          </div>
          <label htmlFor="">Route:-</label>
          <select name="stop" onChange={formik.handleChange}>
            {station.map((item) => (
              <option>{item.stationName}</option>
            ))}
          </select>
          <label htmlFor="">Arrival:</label>
          <input type="time" name="arrival" onChange={formik.handleChange} />
          <label htmlFor="">Diparture:</label>
          <input type="time" name="departure" onChange={formik.handleChange} />
          <button className="border-2" type="button">
            Add
          </button>
        </div>

        <button type="submit">Submit</button>
      </form>




      <div className="border-2">

                <label htmlFor="">Date:</label>
                <input type="date" onChange={handleDate}/>
                <div>
                <label htmlFor="">From</label>
            <select name="from" id="" onChange={handleFrom}>
              {station.map((item) => (
                <option>{item.stationName}</option>
              ))}
            </select>

            <label htmlFor="">To</label>
            <select name="to" onChange={handleTo}>
              {station.map((item) => (
                <option>{item.stationName}</option>
              ))}
            </select>
                </div>
            <button onClick={()=>{handleSearch()}}>Search</button>
      </div>

      <div>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>TrainNo</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Day</th>
                </tr>
            </thead>
            <tbody>
                {
                    finalData.map((data)=>
                        <tr>
                            <td>{data.date}</td>
                            <td>{data.trainNo}</td>
                            <td>{data.from}</td>
                            <td>{data.to}</td> 
                            <td>{data.day}</td> 
                        </tr>
                    )
                }
            </tbody>
        </table>
      </div>
    </>
  );
}
