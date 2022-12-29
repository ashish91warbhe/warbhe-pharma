import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
// import { TableRow } from '@mui/material';
// import { AiOutlineDelete, AiOutlineCheck } from 'react-icons/ai';


const EmployTable = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setData(response.data);
    } catch (error) {
      console.log(error)
    }
  };

  const colums = [
    {
      name: 'country name',
      selector: (row) => row.name,
    },
    {
      name: 'country nativeName',
      selector: (row) => row.nativeName,
    },
    {
      name: 'country capital',
      selector: (row) => row.capital,
    },
    {
      name: 'country flag',
      selector: (row) => row.flag,
    },
    {
      name: 'country name',
      selector: (row) => <img width={50} height={50} src={row.flag} alt=''/>,
    },
  ]
  useEffect(() => {
    getData();
  }, []);

  return (
    < DataTable colums={colums} data={data} />
  )
}

export default EmployTable;