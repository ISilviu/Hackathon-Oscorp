import Box from "@mui/material/Box";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Stack, TextField} from "@mui/material";

function createData(value, date, status) {
    return { value, date, status };
}

const rows = [
    createData(15, '10/12/2021 12:23', 'PENDING'),
    createData(15, '10/12/2021 12:23', 'PENDING' ),
    createData(15, '10/12/2021 12:23', 'PENDING' ),
    createData(15, '10/12/2021 12:23', 'PENDING' ),
    createData(15, '10/12/2021 12:23', 'PENDING'),
];

const TransactionsPage = () => {
    return (
        <>
            <Box p={2}>
                <h2> Transactions</h2>
                <Stack>
                    <Box p={2}> Current balance: $50</Box>
                    <Stack>
                        <Box style={{marginBottom:5}}display="flex" textAlign="center" alignItems="center">
                            <TextField id="outlined-basic" label="Deposit Amount" variant="outlined" />
                            <Button 
                            style={{margin:10}} class="primary-btn" variant="contained">Deposit</Button>
                        </Box>
                        <Box  display="flex" textAlign="center" alignItems="center">
                            <TextField id="outlined-basic" label="Withdraw Amount" variant="outlined" />
                            <Button style={{margin:10}} class="primary-btn"
                            variant="contained">Withdraw</Button>
                        </Box>

                    </Stack>
                </Stack>
                <h2> Transaction History</h2>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Value</TableCell>
                                <TableCell align="center">date</TableCell>
                                <TableCell align="center">status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{row.value}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell align="center">{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}
export default TransactionsPage;
