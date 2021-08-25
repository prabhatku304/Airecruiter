import React from 'react';



const CompanyCard = (props)=>{
    const IsUserRegistered = (c_id)=>{
        console.log(c_id)
        if(props.userRegisteredCompany.includes(c_id)){
            return true
        }
        return false
    }
    console.log(props.data)
    return(
        <div className="company-list">
            {props.data.map(res=>(
                <div className="">
                    <div className="container">
                        <div className="title-image">
                            <img style={{width:300, height:200}} className="img-fluid" src={res.url || "https://q2w6m4y3.stackpathcdn.com/media/catalog/product/cache/1/image/320x320/9df78eab33525d08d6e5fb8d27136e95/j/u/juspay-payment-gateway-320x320_1.png"} alt="" />
                        </div>
                        <div className="desc">
                            <div className="title">
                                <h3>{res.company_name}</h3>
                            </div>
                            <div className="description">
                                <p>{res.description}</p>
                            </div>
                            
                            
                            {IsUserRegistered(res._id) ? ( <div className="w-50" style={{backgroundColor: 'blue'}}>
                                <button className="btn btn-primary" disabled={true} >Registered</button>
                            </div>):(
                                 <div className="apply-btn">
                                 <button className="btn" onClick={()=>{props.onApply(res._id)}}>Apply</button>
                             </div>
                            )}
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export {CompanyCard}