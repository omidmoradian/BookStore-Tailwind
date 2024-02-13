import React from 'react';
import libraryImg from "../../assets/website/library.jpg"
import {Lock} from "@mui/icons-material";

const Banner = () => {
    return (
        <>
            <div className="py-10">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        {/*image section*/}
                        <div>
                            <img
                                data-aos="zoom-in"
                                className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                                src={libraryImg} alt="/"/>
                        </div>
                        {/*text content section*/}
                        <div
                            data-aos="slide-up"
                            className='flex flex-col justify-center gap-6 sm:pt-0'>
                            <h1 className="text-3xl sm:text-4xl font-bold">
                                Library at your fingertips
                            </h1>
                            <p className="text-sm text-gray-500 tracking-wide leading-5">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Libero odio minus enim sint quia architecto distinctio quisquam autem suscipit
                                praesentium?
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Lock
                                        className="text-4xl h-12 w-12 shadow-sm p-1.5
                                        rounded-full bg-violet-300 dark:bg-violet-600"
                                    />
                                    <p>Quality Books</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Lock
                                        className="text-4xl h-12 w-12 shadow-sm p-1.5
                                        rounded-full bg-orange-300 dark:bg-orange-600"
                                    />
                                    <p>Fast Delivery</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Lock
                                        className="text-4xl h-12 w-12 shadow-sm p-1.5
                                        rounded-full bg-green-300 dark:bg-green-600"
                                    />
                                    <p>Easy Payment method</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Lock
                                        className="text-4xl h-12 w-12 shadow-sm p-1.5
                                        rounded-full bg-yellow-300 dark:bg-yellow-600"
                                    />
                                    <p>Get offers on books</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
