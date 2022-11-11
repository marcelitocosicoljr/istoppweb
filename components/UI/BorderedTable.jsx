import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Label from './Label';
import InputField from './InputField';



const dataArray = [
  {
    'plateNumber': '77109393898',
    "operatorName" : 'Michael Dela Cruz',
    'franchiseNumber': '202902370',
    "puvType" : 'White',
    'lastUpdate': 'October 3, 2022',
    "route" : 'Active',
    "status" : 'Active',
  },
  {
    'plateNumber': '77109393898',
    "operatorName" : 'Jessie Aves',
    'franchiseNumber': '202902370',
    "puvType" : 'White',
    'lastUpdate': 'October 3, 2022',
    "route" : 'Active',
    "status" : 'Active',
  },
  {
    'plateNumber': '77109393898',
    "operatorName" : 'Mark Ley',
    'franchiseNumber': '202902370',
    "puvType" : 'White',
    'lastUpdate': 'October 3, 2022',
    "route" : 'Active',
    "status" : 'Active',
  },
  {
    'plateNumber': '77109393898',
    "operatorName" : 'Nion Martin',
    'franchiseNumber': '202902370',
    "puvType" : 'White',
    'lastUpdate': 'October 3, 2022',
    "route" : 'Active',
    "status" : 'Active',
  },
  {
    'plateNumber': '77109393898',
    "operatorName" : 'Sandro Zer',
    'franchiseNumber': '202902370',
    "puvType" : 'White',
    'lastUpdate': 'October 3, 2022',
    "route" : 'Active',
    "status" : 'Active',
  },
  {
    'plateNumber': '77109393898',
    "operatorName" : 'Angelo Baycee',
    'franchiseNumber': '202902370',
    "puvType" : 'White',
    'lastUpdate': 'October 3, 2022',
    "route" : 'Active',
    "status" : 'Active',
  },
  {
    'plateNumber': '77109393898',
    "operatorName" : 'Melchor Rodrigal',
    'franchiseNumber': '202902370',
    "puvType" : 'White',
    'lastUpdate': 'October 3, 2022',
    "route" : 'Active',
    "status" : 'Active',
  },
];

export default function BorderedTable() {
  return (
    <TableContainer  sx={{bgcolor:'transparent'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow  sx={{height: '15px', bgcolor:'#030744'}}>
            <TableCell>
                <Label text='Plate Number' color='blue'/>
            </TableCell>
            <TableCell >
                <Label text="Operator's Name" color='blue'/>
            </TableCell>
            <TableCell>
                <Label text='Franchise Number' color='blue'/>
            </TableCell>
            <TableCell >
                <Label text='PUV Type' color='blue'/>
            </TableCell>
            <TableCell>
                <Label text='Last Update' color='blue'/>
            </TableCell>
            <TableCell >
                <Label text='Route' color='blue'/>
            </TableCell>
            <TableCell >
                <Label text='Status' color='blue'/>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ 'tr:nth-child(even)': { background: '#DEDCDC' },'tr:nth-child(odd)': { background: '#fff' } }}>

          <TableRow className='tableSearch'>

              <TableCell sx={{maxWidth:'220px'}}><InputField placeHolder='Search Plate Number'/></TableCell>
              <TableCell ><InputField placeHolder='Search Name'/></TableCell>
              <TableCell ><InputField placeHolder='Search Franchise Number'/></TableCell>
              <TableCell sx={{maxWidth:'190px'}}><InputField placeHolder='Search PUV Type'/></TableCell>
              <TableCell ><InputField placeHolder='Search Date'/></TableCell>
              <TableCell sx={{maxWidth:'160px'}} ><InputField placeHolder='Search Route'/></TableCell>
              <TableCell sx={{maxWidth:'160px'}}><InputField placeHolder='Search Status'/></TableCell>

          </TableRow>

          {dataArray.map((row,index) => (
            <TableRow
              key={index}
            >
              <TableCell  scope="row" >
                {row.plateNumber}
              </TableCell>
              <TableCell >{row.operatorName}</TableCell>
              <TableCell >{row.franchiseNumber}</TableCell>
              <TableCell >{row.puvType}</TableCell>
              <TableCell >{row.lastUpdate}</TableCell>
              <TableCell >{row.route}</TableCell>
              <TableCell >{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}