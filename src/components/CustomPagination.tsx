/**
 * CustomPagination - a wrapper for ReactPaginate.
 * @param {Number} [pageCount] - number of pages.
 * @param {function} [onPageChange] - function to switch pages in pagination.
 */
import { I_Components } from 'types/I_Components';
import { makeStyles } from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const useStyles = makeStyles((theme) => ({
  pagination: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '20px',
    listStyle: 'none',
    padding: '0.8rem 0',
    paddingRight: '1rem',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    backgroundColor: '#B76A40',
    width: '100%',
    margin: '1rem',
    [theme.breakpoints.up('sm')]: {
      width: '20rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '30rem',
    },
  },
  pageStyle: {
    cursor: 'pointer',
  },
  paginationActive: {
    color: 'white',
    padding: theme.spacing(1),
    borderRadius: '20%',
  },
}));
const CustomPagination = ({
  pageCount,
  onPageChange,
}: I_Components.I_Pagination) => {
  const classes = useStyles();
  return (
    <ReactPaginate
      previousLabel={<ArrowLeftIcon style={{ color: 'white' }} />}
      nextLabel={<ArrowRightIcon style={{ color: 'white' }} />}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={classes.pagination}
      pageClassName={classes.pageStyle}
      activeClassName={classes.paginationActive}
    />
  );
};

CustomPagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export default CustomPagination;
