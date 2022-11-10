import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Label from './Label';



const dataArray = [
  {
    'franchiseNumber': '202902370',
    "operatorName" : 'Michael Dela Cruz',
    'tricycleNumber': '77109393898',
    "tricycleColor" : 'White',
    'dateMonitored': 'October 3, 2022',
    "status" : 'Active',
  },
  {
    'franchiseNumber': '202902370',
    "operatorName" : 'Jessa Aves',
    'tricycleNumber': '77109393898',
    "tricycleColor" : 'White',
    'dateMonitored': 'October 3, 2022',
    "status" : 'Active',
  },
  {
    'franchiseNumber': '202902370',
    "operatorName" : 'Norman Lido',
    'tricycleNumber': '77109393898',
    "tricycleColor" : 'White',
    'dateMonitored': 'October 3, 2022',
    "status" : 'Active',
  },
  {
    'franchiseNumber': '202902370',
    "operatorName" : 'Martin Nights',
    'tricycleNumber': '77109393898',
    "tricycleColor" : 'White',
    'dateMonitored': 'October 3, 2022',
    "status" : 'Active',
  },
  {
    'franchiseNumber': '202902370',
    "operatorName" : 'Mark After',
    'tricycleNumber': '77109393898',
    "tricycleColor" : 'White',
    'dateMonitored': 'October 3, 2022',
    "status" : 'Active',
  },
  {
    'franchiseNumber': '202902370',
    "operatorName" : 'Garyl Ong',
    'tricycleNumber': '77109393898',
    "tricycleColor" : 'White',
    'dateMonitored': 'October 3, 2022',
    "status" : 'Active',
  },
  {
    'franchiseNumber': '202902370',
    "operatorName" : 'Nestor White',
    'tricycleNumber': '77109393898',
    "tricycleColor" : 'White',
    'dateMonitored': 'October 3, 2022',
    "status" : 'Active',
  },
];

export default function BorderedTable() {
  return (
    <TableContainer  sx={{bgcolor:'transparent'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow  sx={{height: '130px'}}>
            <TableCell>
                <Label text='Francise Number' color='blue'/>
            </TableCell>
            <TableCell >
                <Label text="Operator's Name" color='blue'/>
            </TableCell>
            <TableCell>
                <Label text='Tricycle Number' color='blue'/>
            </TableCell>
            <TableCell >
                <Label text='Tricycle Color' color='blue'/>
            </TableCell>
            <TableCell>
                <Label text='Date Monitored' color='blue'/>
            </TableCell>
            <TableCell >
                <Label text='Status' color='blue'/>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataArray.map((row) => (
            <TableRow
              key={row.franchiseNumber}
               sx={{ 'td': { border: '1.5px solid #030744' } }}
            >
              <TableCell  scope="row" >
                {row.franchiseNumber}
              </TableCell>
              <TableCell >{row.operatorName}</TableCell>
              <TableCell >{row.tricycleNumber}</TableCell>
              <TableCell >{row.tricycleColor}</TableCell>
              <TableCell >{row.dateMonitored}</TableCell>
              <TableCell >{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}