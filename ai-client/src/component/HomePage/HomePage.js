import React from 'react';
import './home.css'

const Homepage = (props)=>{

    return(
        <div>
            <section className="p-0 m-0 main-page" data-bg-img='./image/home-1.jpg'>
                <div className=" p-5 w-50 " >
                    <h1 style={{color:"white"}}>Ai Recruitment</h1>
                    <h5 style={{color:"white"}}>Based On Our Ai recruitment Platform Company Can easily hire the employ</h5>
                </div>
            </section>
        </div>
    )
}

export {Homepage}