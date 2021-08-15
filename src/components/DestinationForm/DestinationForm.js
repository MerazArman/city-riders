import React from 'react';
import './DestinationForm.css'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PopoverPopupState from '../PopoverPopupState/PopoverPopupState';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

const DestinationForm = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const popOverTest = () =>{
        console.log('click');
    }
    return (
        <div className="container">
            <div className="booking-form-style">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Origin" />
                    <TextField id="standard-basic" label="Destination" />
                </form>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Form"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            className="aria"
                        />
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="To"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            className="aria"
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <br />
                <PopoverPopupState></PopoverPopupState>
                   
                {/* <button className="btn booking-btn"  type="button" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content={<div style={{backgroundColor:"green"}}> hellow</div>} > Search</button> */}
            </div>

        </div>
    );
};

export default DestinationForm;