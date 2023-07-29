import React from "react";
import ReportCSS from "../css/Report.module.css";

const Report = () => {
  return (
    <>
      <h2 className={ReportCSS.head}>Enter your report below</h2>
      <form className={ReportCSS.form}>
        <textarea name="reportText" className={ReportCSS.reportText} />
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Report;
