import * as React from 'react';
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { getBooks } from '../api/getBooks';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.title}
                </TableCell>
                <TableCell align="right">{row.ISBN}</TableCell>
                <TableCell align="right">{row.publishyear}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right"><Button disabled={row.status}>Check In</Button></TableCell>
                <TableCell align="right"><Button disabled={!row.status}>Check Out</Button></TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Mobile Number</TableCell>
                                        <TableCell align="right">National ID</TableCell>
                                        <TableCell align="right">Checkout Date/Time</TableCell>
                                        <TableCell align="right">Checkin Date/Time</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.borrowDetails.map((historyRow) => (
                                        <TableRow key={historyRow._id}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.name}
                                            </TableCell>
                                            <TableCell>{historyRow.mobileNumber}</TableCell>
                                            <TableCell align="right">{historyRow.nationalId}</TableCell>
                                            <TableCell align="right">{historyRow.checkoutDate}</TableCell>
                                            <TableCell align="right">{historyRow.checkinDate}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}




export default function HomeScreen() {

    const [books, setBooks] = React.useState([]);
    const loadBooks = async () => {
        let ret = await getBooks();
        setBooks(ret.data);
    };
    console.log('I am books', books);
    React.useEffect(() => {
        loadBooks();
    }, []);
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Book Title</TableCell>
                        <TableCell align="right">ISBN</TableCell>
                        <TableCell align="right">Publish Year </TableCell>
                        <TableCell align="right">Cover Price</TableCell>
                        <TableCell align="right">Cover Out</TableCell>
                        <TableCell align="right">Check In</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((book) => (
                        <Row key={book._id} row={book} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
