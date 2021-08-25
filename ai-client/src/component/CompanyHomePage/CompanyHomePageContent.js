import React,{Component} from "react";
import { CompanyCard } from "./CompanyCard";
import Typist from 'react-typist'
import { UserCompanyTestApi } from "../_Api/Company";
import { PageSpinner } from "../UserProfile/PageSpinner";
import {withRouter} from 'react-router-dom';

const CompanyHomePageContents = (props)=>{
    const [isLoad, setLoad] = React.useState(false);

    const onApply = (id)=>{
        setLoad(true)
        UserCompanyTestApi(props.user.id, id)
            .then(res=>{
                setLoad(false)
                props.history.push('/user/dashboard')
            })
            .catch(err=>console.log(err))
    }
    return(
        <section>
            <div className="">
                <div className="p-0 m-0">
                    <img src="./image/company.jpg" alt="" className="img-fluid" />
                    <div className="p-absolute company-title">
                        <Typist
                         avgTypingDelay={40}
                         startDelay={2000}
                         cursor={true}
                         className="typist-title"
                        >
                           <span>Our Company Provides best service to Employee</span>

                        </Typist>
                        
                    </div>
                </div>
                <div className="container">
                    <div className="">
                        {isLoad ? (<PageSpinner />):(
                             <CompanyCard data={props.data} onApply = {onApply}
                             userRegisteredCompany={props.userRegisteredCompany}
                             />
                        )}
                       
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

const CompanyHomePageContent = withRouter(CompanyHomePageContents)
export {CompanyHomePageContent}