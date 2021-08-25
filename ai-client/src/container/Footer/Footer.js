import React from 'react';

const Footer = (props)=>{

    return(
        <section className=" footer">
            <div className="row p-5 ">
                <div className=" col-lg-7 email text-center mt-5">
                    <h3 style={{color:"rgb(0, 0, 0)"}}>prabhatkmr5789@gmail.com</h3>
                </div>
                <div className="col-lg-5 href-list mt-5 ">
                    <div className="" style={{color:"rgb(0, 0, 0)"}}>Home</div>
                    <div className="" style={{color:"rgb(0, 0, 0)"}}>Company</div>
                    <div className="" style={{color:"rgb(0, 0, 0)"}}>About</div>
                    <div className="" style={{color:"rgb(0, 0, 0)"}}>Faq</div>
                </div>
            </div>
        </section>
    )
}

export {Footer}