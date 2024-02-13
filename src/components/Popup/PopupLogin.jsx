import React from 'react';
import {CloseOutlined} from "@mui/icons-material";
import {TextField} from "@mui/material";

const PopupLogin = ({orderPopup, handleOrderPopup}) => {
    return (
        <>
            {orderPopup && (
                <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm bg-black/50">
                    <div
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
                        {" "}
                        {/*header*/}
                        <div className="flex items-center justify-between">
                            <div>
                                <h1>Order Your Book</h1>
                            </div>
                            <div>
                                <CloseOutlined
                                    className="text-2xl cursor-pointer "
                                    onClick={() => handleOrderPopup(false)}
                                />
                            </div>
                        </div>
                        {/*Form Body*/}
                        <div>
                            <TextField
                                autoComplete="off"
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-full border
                             border-gray-300 dark:bg-gray-800
                              px-2 py-1 mb-4"
                            />
                            <TextField
                                autoComplete="off"
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-full border
                             border-gray-300 dark:bg-gray-800
                              px-2 py-1 mb-4"
                            />
                            <TextField
                                autoComplete="off"
                                type="text"
                                placeholder="Address"
                                className="w-full rounded-full border
                             border-gray-300 dark:bg-gray-800
                              px-2 py-1 mb-4"
                            />
                            <div className="flex justify-center">
                                <button className="bg-primary text-white px-8 py-2 rounded-full">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupLogin;
