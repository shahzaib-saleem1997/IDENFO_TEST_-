import * as React from 'react';
import { Box, Container, Paper, Button, Typography, TextField, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { checkin } from '../api/checkin';

import moment from 'moment';


const theme = createTheme();

export default function CheckinScreen() {
    const [submitted, setSubmitted] = React.useState(false);
    const [loading, setLoading] = React.useState(true);


    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        let response = await checkin('61900c3a7ca249a0969ed4dc');
        console.log(response);
        setLoading(false);

    };

    return (
        <ThemeProvider theme={theme}>

            <Container component="form" noValidate onSubmit={handleSubmit} maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkin
                    </Typography>
                    <React.Fragment>

                        {!submitted ? (
                            <React.Fragment>
                                <Typography variant="h6" gutterBottom>
                                    Shipping address
                                </Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="firstName"
                                            name="firstName"
                                            label="First name"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="lastName"
                                            name="lastName"
                                            label="Last name"
                                            fullWidth
                                            autoComplete="family-name"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="mobileno"
                                            name="mobileno"
                                            label="Mobile Number"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="nationalid"
                                            name="nationalid"
                                            label="National ID"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            variant="standard"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="date"
                                            name="date"
                                            label="Date"
                                            fullWidth
                                            autoComplete="shipping address-line1"
                                            variant="standard"
                                            value={moment().format('YYYY-MM-DD')}
                                        />
                                    </Grid>

                                </Grid>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>


                                    <Button
                                        variant="contained"
                                        type="submit"
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        Checkin
                                    </Button>
                                </Box>
                            </React.Fragment>
                        ) : (

                            loading ? (
                                <React.Fragment >
                                    <Typography variant="h5" gutterBottom>
                                        Your request is loading
                                    </Typography>
                                </React.Fragment>

                            ) : (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Successful
                                    </Typography>
                                    <Typography align='center' variant="subtitle1">
                                        Book checkin was successful
                                    </Typography>
                                </React.Fragment>
                            )


                        )
                        }



                    </React.Fragment>
                </Paper>

            </Container>
        </ThemeProvider >
    );
}