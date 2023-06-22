import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tranactionDetails, detailsSummary } from "../../actions/reportActions"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonMUI from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NavBar from '../../components/Nav';

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
    const { transaction } = reportDetails

    const summaryDetails = useSelector(state => state.summaryDetails)
    const { summery } = summaryDetails

    const [selectedRow, setSelectedRow] = useState({});

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    console.log("masas", { selectedRow });

    useEffect(() => {
        dispatch(tranactionDetails())
    }, [dispatch,])

    useEffect(() => {
        dispatch(detailsSummary())
    }, [dispatch,])
    console.log("mas", transaction)

    console.log("summar1", summery && summery.totalCardTransaction)


    return (
        <>
            <div>
                <NavBar/>
                <center>
                    <div>
            
                        <h1>Transactions List </h1>

                        <TableContainer style={{ height: 500, width: 1000 }} component={Paper}>
                            <Table sx={{ minWidth: 3 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>ID</StyledTableCell>
                                        <StyledTableCell align="center">Payment Mode</StyledTableCell>
                                        <StyledTableCell align="center">Currency</StyledTableCell>
                                        <StyledTableCell align="center">Card Label</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {transaction && transaction.map((row, index) => (
                                        <StyledTableRow
                                            key={row.id}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.id}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{row.paymentMode}</StyledTableCell>
                                            <StyledTableCell align="center">{row.currency}</StyledTableCell>
                                            <StyledTableCell align="center">{row.cardLabel}</StyledTableCell>
                                            <StyledTableCell align="center" >

                                                <ButtonMUI variant="outlined" onClick={() => setSelectedRow(row) || handleClickOpen()}>
                                                    View Transaction Details
                                                </ButtonMUI>

                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                    style={{ backgroundColor: 'transparent' }}
                                                >
                                                    <DialogTitle id="alert-dialog-title">
                                                        {"Transaction Details"}
                                                    </DialogTitle>
                                                    <DialogContent>
                                                        <DialogContentText id="alert-dialog-description">
                                                            ID: {selectedRow.id}
                                                        </DialogContentText>
                                                        <DialogContentText id="alert-dialog-description">Card Label: {selectedRow.cardLabel}</DialogContentText>
                                                        <DialogContentText id="alert-dialog-description"> Currency : {selectedRow.currency}</DialogContentText>
                                                        <DialogContentText id="alert-dialog-description">Amount: LKR {selectedRow.amount}</DialogContentText>
                                                        <DialogContentText id="alert-dialog-description"> Mobile: {selectedRow.custMobile}</DialogContentText>
                                                        <DialogContentText id="alert-dialog-description">Date and Time: {selectedRow.dateTime}</DialogContentText>
                                                        <DialogContentText id="alert-dialog-description">Invoice Number: {selectedRow.invoiceNo}</DialogContentText>
                                                        <DialogContentText id="alert-dialog-description"> Card Number: {selectedRow.pan}</DialogContentText>
                                                        <DialogContentText id="alert-dialog-description"> Payment Mode: {selectedRow.paymentMode}</DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={handleClose}>Close</Button>

                                                    </DialogActions>
                                                </Dialog>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                    <br></br>
                    <h1>All Transactions Summary </h1>
                    <Card sx={{ maxWidth: 600 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={('https://img.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg?w=1480&t=st=1668669322~exp=1668669922~hmac=ce2327784a42e4466a021129430bb096bd865e76084ebe26e7614786f2a21b4d')}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                Transaction Summary
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Total Card Transactions: {summery && summery.totalCardTransaction}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Total Cash Transactions: {summery && summery.totalCashTransaction}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Total Cash QR Transactions: {summery && summery.totalQrTransaction}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Total Revenue: Rs. {summery && summery.totalRevenue}/=
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Total Transaction Count: {summery && summery.totalTransactionCount}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>


                </center>
            </div>
        </>

    )
}

export default ReportScreen