import { Link } from "react-router-dom";
import './Pagination.css';

export const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++){
    pageNumbers.push(i)
  }
  return (
    <nav className="pagination-nav">
        <ul className="pagination-container">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <Link to={'/'} onClick={() => paginate(number)} className="page-link">
                        {number}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}