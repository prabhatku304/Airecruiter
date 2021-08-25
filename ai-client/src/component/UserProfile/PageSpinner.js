import React from 'react';
import Spinner from 'react-spinkit'


const PageSpinner = (props)=>{

    return(
        <div className="d-flex justify-content-center text-center" style={{width: '100%', height: 400,}}>
            <div style={{ paddingTop:'20%', position:'absolute'}}>
                <div className="spinner">
                <Spinner 
                name="ball-scale-ripple" color="#B4D6FC"
                />
                </div>
                
            </div>
        </div>

    )
}

export {PageSpinner}