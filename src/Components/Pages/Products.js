import React from 'react';
import Pagination from './Pagination';




// const imgw = {
//     display: "flex",
//     width: "100%",
//     height: "400px"
// }
function Products() {

    return (
        <div>
            <div className='container text-center bg-light'>
                <h2><u>Manufacture Products</u></h2>
                <div className='container '>
                    <Pagination />
                </div>
                <div className='container text-center'>
                    <h2><u>Compony Products List</u></h2>

                    <div className='for-pdf'>
                        <h6>-: pdf product list :-</h6>
                        <a target="_blank" href="warbhe pharma product list.pdf"><img src='./PDF.png' alt='' style={{ height: "50px" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;