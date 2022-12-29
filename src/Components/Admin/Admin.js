import React, { useState } from 'react';
import EmployTable from './EmployTable';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

const Admin = () => {


    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    // if (searchInput.length > 0) {
    //     data.filter((employ) => {
    //         return employ.name.match(searchInput);
    //     });
    // }

    return (
        <>
            <div className='bg-light'>
                <div className='container shadow-md '
                    style={{
                        position: "relative",
                        backgroundColor: "lightBlue",
                        padding: "0",
                        height: "100%"
                    }}>
                    <div className="row">

                        {/* Admin Photo */}

                        <div className="col-sm-2 admin ">
                            <div style={{
                                height: "80px",
                                width: "100px",
                                margin: "10px 10px",
                                borderRadius: "5px",
                                border: "1px solid gray",
                                position: "relative",
                                background: "white",

                            }} >
                            </div>
                        </div>

                        {/* // Search Bar */}

                        <div className="col-md-8">
                            <div className='d-flex justify-content-center position-absolute'>
                                <div>
                                    <PersonSearchIcon style={{ marginTop: "", marginLeft: "80%" }} />
                                </div>
                                <input type="search"
                                    placeholder='Search here'
                                    onChange={handleChange}
                                    value={searchInput}
                                    style={{
                                        width: "200px",
                                        marginTop: "",
                                        marginLeft: "20%",
                                        borderColor: "gray",
                                        borderRadius: "6px",
                                        display: "flex",
                                    }} />
                            </div>
                        </div>
                        {/* Log Out Button */}

                        <div className="col-md-2">
                            <Box>
                                <FormControlLabel className='position-absolute top-0 end-0'
                                    sx={{
                                        display: 'block',
                                    }}
                                    control={
                                        <Switch
                                            name="loading"
                                            color="primary"
                                        />
                                    }
                                    label="Log Out"
                                />
                            </Box>
                        </div>
                    </div>
                </div>

                <hr style={{ padding: "0", width: "100%" }} />

                {/* SideBar */}

                <div className="row">
                    <div className="col-md-2" style={{ borderRight: "0.1rem solid", height: "100px", float: "top-rihght" }}>
                        <div className='sidebar'>
                            <Sidebar />
                        </div>
                    </div>
                </div>

                {/* EmployeTable */}

                <div className="container-fluid">
                    <div className="row">
                        <div className='d-flex justify-content-center'>
                        </div>
                        <div className="col-md-12">
                            <EmployTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;