import React from 'react'
//import React from 'react'
//import React from 'react'
//import React from 'react'

const wh = {
    width:"100%",
    height:"100%"
}
const Home = () => {
    return (
        <div className='bg'>
            <div>
                <div className='container d-flex'>
                    <div className='row'>
                        <div className='col-md-3  mt-4 shadow p-2 mb-2 bg-body ' >
                            <img src='./pharma.jpg' alt='' style={wh} />
                        </div>
                        <div className='col-md-3 p-1 mt-4 shadow p-2 mb-2 bg-body ' >
                            <img src='./pharma2.jpg' alt='' style={wh} />
                        </div>
                        <div className='col-md-3 p-1 mt-4 shadow p-2 mb-2 bg-body ' >
                            <img src='./pharma 3.jpg' alt='' style={wh} />
                        </div>
                        <div className='col-md-3 p-1 mt-4 shadow p-2 mb-2 bg-body ' >
                            <img src='./pharma4.jpg' alt='' style={wh} />
                        </div>
                        <div className='col-md-3 p-1 mt-4 shadow p-2 mb-2 bg-body ' >
                            <img src='./pharma5.jpg' alt='' style={wh} />
                        </div>
                        <div className='col-md-3 p-1 mt-4 shadow p-2 mb-2 bg-body ' >
                            <img src='./pharma6.jpg' alt='' style={wh} />
                        </div>
                        <div className='col-md-3 p-1 mt-4 shadow p-2 mb-2 bg-body ' >
                            <img src='./pharma7.jpg' alt='' style={wh} />
                        </div>
                        <div className='col-md-3 p-1 mt-4 shadow p-2 mb-2 bg-body ' >
                            <img src='./pharma8.jpg' alt='' style={wh} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home