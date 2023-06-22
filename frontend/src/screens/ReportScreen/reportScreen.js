import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {tranactionDetails} from "../../actions/reportActions"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

const ReportScreen = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const reportDetails = useSelector(state => state.reportDetails)
    const {transaction} = reportDetails
     
    useEffect(() => {
        dispatch(tranactionDetails())
  }, [dispatch,])
  console.log("mas",transaction)
  return (
    <>
<div>
<center>
<div>



<TableContainer style={{height:500, width: 700}}component={Paper}>
      <Table sx={{ minWidth: 3 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Payment Mode</StyledTableCell>
            <StyledTableCell align="right">Currency&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">card Label&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transaction && transaction.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.paymentMode}</StyledTableCell>
              <StyledTableCell align="right">{row.currency}</StyledTableCell>
              <StyledTableCell align="right">{row.cardLabel}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    
    
</center>
</div>
    </>
   
  )
}

export default ReportScreen