import React from "react";
import { SigninPage } from "./signin/signin";
import { SignupPage } from "./signup/signup";

import './session.css'

export const SessionPage=({ location })=>{

    return(
        <div className="content-session">
            {
                location.pathname==="/session/signup"?
                <SignupPage></SignupPage>
                :
                <></>
            }

            {
                location.pathname==='/session/signin'?
                <SigninPage></SigninPage>
                :
                <></>
            }
        </div>
    )

}