import React from 'react';
import { GoMortarBoard } from "react-icons/go";
import { AiOutlineBook } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";


function Features(){

    return (

        <div className='container'>

            <ul className="nav justify-content-center mb-4">

                <li className="nav-item me-5">
                    <a className="nav-link text-dark" href="null"><b>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <GoMortarBoard style={{"fontSize":"50px","color":"#3BAA66"}}/>
                            </div>
                            <div>
                                <h2>3,000+</h2>
                                <p>Graduates</p>
                            </div>
                        </div>
                    </b></a>
                </li>

                <li className="nav-item me-5">
                    <a className="nav-link text-dark" href="null"><b>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <AiOutlineBook style={{"fontSize":"50px","color":"#3BAA66"}}/>
                            </div>
                            <div>
                                <h2>50+</h2>
                                <p>Courses</p>
                            </div>
                        </div>
                    </b></a>
                </li>

                <li className="nav-item me-5">
                    <a className="nav-link text-dark" href="null"><b>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <AiOutlineBook style={{"fontSize":"50px","color":"#3BAA66"}}/>
                            </div>
                            <div>
                                <h2>95%</h2>
                                <p>Course completion</p>
                            </div>
                        </div>
                    </b></a>
                </li>

                <li className="nav-item me-5">
                    <a className="nav-link text-dark" href="null"><b>
                        <div className="col d-flex align-items-start">
                            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
                                <GiTeacher style={{"fontSize":"50px","color":"#3BAA66"}}/>
                            </div>
                            <div>
                                <h2>100+</h2>
                                <p>Teachers</p>
                            </div>
                        </div>
                    </b></a>
                </li>

            </ul>
                    

        </div>

    )

}

export default Features