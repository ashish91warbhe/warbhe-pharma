import React, { useState } from 'react';
import { Button } from '@mui/material';

const Pagination = () => {
  const [posts] = useState([
  
    <img src='./Onde 4 tablet.jpeg' id='6' alt='' />,
    <img src='./Pantoli-40.jpeg' id='7' alt='' />,
    <img src='./Dackwar-SP.jpeg' id='4' alt='' />,
    <img src='./Nimb-p.jpeg' id='5' alt='' />,
    <img src='./Amoty 625.jpeg' id='1' alt='' />,
  
    <img src='./cet n 10 tablet.jpeg' id='3' alt='' />,
    <img src='./paragood 650.jpeg' id='8' alt='' />,
    <img src='./Paragood-cold.jpeg' id='9' alt='' />,
    <img src='./Paragood.jpeg' id='10' alt='' />,
    <img src='./Azythromycin tablet.jpeg' id='2' alt='' />,
    <img src='./Vitleta.jpeg' id='11' alt='' />,
    <img src='./Wolafast-gel.jpeg' id='12' alt='' />,
    <img src='./Wolcof-Dx.jpeg' id='12' alt='' />
  ]);

  const [noOfElement, setNoOfElement] = useState(4);

  const loadmore = () => {
    setNoOfElement(noOfElement + noOfElement)
  }
  const previous = () => {
    setNoOfElement(noOfElement - 4)
  }
  return (
    <>
      <div className='container py-4'>
        <div className='row'>
          {
            posts.slice(0, noOfElement).map((post, index) => {

              return (
                <>
                  <div className='col-md-6 mb-5' key={post.id}>
                    <div className='card shadow p-2 mb-2 bg-body'>
                      {post}
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className='py-2 d-flex justify-content-between'>
          <Button variant="contained" size="small" onClick={() => previous()}  >previous</Button>
          <Button variant="contained" size="small" onClick={() => loadmore()}  >Load more</Button>
        </div>
      </div>
    </>
  );
}
export default Pagination;