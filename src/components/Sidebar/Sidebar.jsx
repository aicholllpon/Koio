import { Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { MainContext } from '../../contexts/MainContext';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary
    }
}))


const Sidebar = (props) => {
    const classes = useStyles();
    const { getProductsData } = useContext(MainContext)
    const history = useHistory();

    function fetchParams(params, value) {
        if (value === "all") {
            // props.history.push('/')
            props.history.push(props.location.pathname.replace(params))
            getProductsData()
            return
        }
        let search = new URLSearchParams(props.history.location.search);
        search.set(params, value)
        let url = `${props.location.pathname}?${search.toString()}`
        props.history.push(url);
        getProductsData(props.history)
    }

    function handleInputSearch(e) {
        let search = new URLSearchParams(history.location.search)
        search.set("q=", e.target.value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getProductsData()
    }

    return (
        <Grid item md={3}>
            <Paper className={classes.paper}>
                <Grid>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Color</FormLabel>
                        <RadioGroup aria-label="color" name="color1" onChange={(event) => fetchParams("color=", event.target.value)}>
                            <FormControlLabel value="black" control={<Radio />} label="black" />
                            <FormControlLabel value="white" control={<Radio />} label="white" />
                            <FormControlLabel value="brown" control={<Radio />} label="brown" />
                            <FormControlLabel value="pink" control={<Radio />} label="pink" />
                            <FormControlLabel value="blue" control={<Radio />} label="blue" />
                            <FormControlLabel value="All" control={<Radio />} label="All" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" onChange={(event) => fetchParams("category=", event.target.value)}>
                            <FormControlLabel value="Men" control={<Radio />} label="Men" />
                            <FormControlLabel value="Women" control={<Radio />} label="Women" />
                            <FormControlLabel value="Uni" control={<Radio />} label="Uni" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid>
                </Grid>
            </Paper>
            <input className="inp-side mt-3" style={{ width: "330px", backgroundColor: "#f6e5d1" }} onChange={handleInputSearch} placeholder="Search" type="text" />
        </Grid>
    );
};

export default Sidebar;