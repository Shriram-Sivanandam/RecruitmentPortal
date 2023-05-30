import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import axios from "axios";

function StudentList() {
  const [stuList, setStuList] = useState([]);

  const columns = [
    { dataField: "name", text: "Name", sort: true, filter: textFilter() },
    { dataField: "regno", text: "Reg No.", sort: true, filter: textFilter() },
    {
      dataField: "phone_no",
      text: "Phone No.",
      sort: true,
      filter: textFilter(),
    },
    { dataField: "domains", text: "Domains", sort: true, filter: textFilter() },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/admin/students")
  //     .then((response) => response.json())
  //     .then((result) => setStuList(result))
  //     .catch((error) => console.log(error));
  // }, [setStuList]);
  useEffect(() => {
    axios
      .get("/admin/student")
      .then((response) => {
        setStuList(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-2 mb-2">
      <h1>Student List</h1>
      <BootstrapTable
        bootstrap4
        keyField="regno"
        data={stuList}
        columns={columns}
        pagination={pagination}
        filter={filterFactory()}
      />
    </div>
  );
}

export default StudentList;
