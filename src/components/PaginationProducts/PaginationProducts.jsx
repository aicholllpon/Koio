import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { MainContext } from '../../contexts/MainContext';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const PaginationProducts = () => {
    const history = useHistory();
    const classes = useStyles();
    const { getProductsData, totalCount } = useContext(MainContext)

    function getPage(object, page) {
        console.log(page);
        let search = new URLSearchParams(history.location.search)
        search.set('_page', page)
        search.set('_limit', 2)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getProductsData()
    }


    return (
        <div>
            {Math.ceil(totalCount / 3) ?
                < Pagination count={Math.ceil(totalCount / 3)} variant="outlined" shape="rounded" onChange={getPage} />
                : ''}

        </div>
    );
};

export default PaginationProducts;