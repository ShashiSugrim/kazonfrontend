import React, {useState} from "react";
import ReportCSS from "../css/Report.module.css";
import axios from "axios";

const Report = () => {
  const [reportText, setReportText] = useState("");
  const handleReport = async () =>
  {
    console.log("report text is " + reportText);
    await axios.post("http://localhost:3001/report", {  text:reportText }, {headers: { "Authorization": localStorage.getItem('accessToken')} }).then((response) => {
      alert(`Added report!`);
    })
    .catch((err) => {
      // console.log(err.status)
      if(err.response.status ===403)
      {
        alert("Max number of reports sent!");
      }
      if (err) {
        console.log("error" + err);
      }
    });
  }
  return (
    <>
      <h2 className={ReportCSS.head}>Enter your report below</h2>
      <form className={ReportCSS.form}>
        <textarea name="reportText" value={reportText} onChange={(e)=>{
          setReportText(e.target.value);
        }} className={ReportCSS.reportText} />
        <br></br>
        <button onClick={handleReport} type="button">Submit</button>

      </form>

    </>
  );
};

export default Report;
