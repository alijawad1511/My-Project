import React, { useState } from "react";

const CSVReader = () => {
  const [csvFile, setCsvFile] = useState();
  const [users, setUsers] = useState([]);

  const csvToArray = (text, delim = ",") => {
    // Convert CSV to Array
    const headers = text.slice(0, text.indexOf("\n")).split(delim);
    const rows = text.slice(text.indexOf("\n") + 1).split("\n");

    const usersArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((object, header, i) => {
        object[header] = values[i];
        return object;
      }, {});

      return eachObject;
    });

    setUsers(usersArray);
  };

  const readCSV = () => {
    const file = csvFile;
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      console.log(text);
      csvToArray(text);
    };

    console.log(users);

    reader.readAsText(file);
  };

  return (
    // @@@( Reference )@@@
    // https://dev.to/theallegrarr/read-csv-files-in-react-apps-without-installing-any-package-hn7
    <form id="csv_form">
      <label htmlFor="csv_file">CSV Reader</label>
      <input
        type="file"
        accept=".csv"
        id="csv_file"
        onChange={(e) => {
          setCsvFile(e.target.files[0]);
        }}
      />
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          if (csvFile) readCSV();
        }}
      >
        Read CSV
      </button>
    </form>
  );
};

export default CSVReader;
