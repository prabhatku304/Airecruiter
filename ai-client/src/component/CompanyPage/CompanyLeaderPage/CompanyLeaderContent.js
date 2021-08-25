import React from 'react';


const CompanyLeaderContent = (props)=>{

    
    return(
        <div className="container">
        <div className="candidate-list ">
            {props.data.map(res=>(
                <>
                    <div className="row p-3">
                        <div className="col-md-6 user-text">
                            <h5 className="user-text">Email: {res.email}</h5>
                        </div>
                        <div className="username col-md-6">
                            <h5 className="user-text">Username: {res.username}</h5>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-center p-3 " style={{cursor: 'pointer'}} onClick={()=>props.OpenCandidate(res.id)}><i className="fa fa-share-square u-icon" ></i></div>
                    </div>
                    <hr />
                </>
            ))}
        </div>
        </div>
    )
}

export {CompanyLeaderContent}