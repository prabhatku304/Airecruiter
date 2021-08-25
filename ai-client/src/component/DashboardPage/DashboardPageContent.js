import React from 'react';


const DashboardPageContent = (props)=>{

 console.log(props.data)
    return(
        <div className="container">
            <div className="">
                {props.data.map(res=>(
                    <>
                    <div className="card">
                         <div className="company-img p-0 m-0">
                                <img src={res.url || "https://si.wsj.net/public/resources/images/BN-JP042_melros_P_20150728024345.jpg"} alt="" className="img-fluid" />
                            </div>
                        <div className="container">
                           
                            <div className="">
                                <h1>{res.company_name}</h1>
                            </div>
                            <div className="">
                                <p>{res.description}</p>
                            </div>
                            <div className="f-right update-btn">
                            <button className="btn" onClick={()=>props.onStartTest(res._id)}>Start Test</button>
                               
                            </div>
                            
                        </div>
                    </div>
                    <hr />
                    </>
                ))}
            </div>
        </div>
    )
}

export {DashboardPageContent}