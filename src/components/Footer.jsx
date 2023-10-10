import React from 'react';
import  "../sass/style.scss";


export default function Footer() {
    return (
        <footer className="container-fluid g-0 to_btm"> 
            <div className="row w-100 gx-0 col-hgt">
                <div className="col-12 col-sm-4 bg-secondary horizontal_pipe">
                <div className="h-100 w-100 d-flex justify-content-center"><p></p></div>
                </div>
                <div className="col-12  col-sm-4  bg-secondary center_pipes">
                <div className="h-100 w-100 d-flex justify-content-center"><p></p></div>
                </div>
                <div className="col-12  col-sm-4  bg-secondary center_pipes_right">
                <div className="h-100 w-100 d-flex justify-content-center"><p></p></div>
                </div>
            </div>
        </footer>
    )
}