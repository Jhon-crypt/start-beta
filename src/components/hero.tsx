import React from 'react';
import hero from '../assets/hero.png'

function Hero(){

    let hero_data : any = {
        
        image_url : hero,
        title : "Develop your mobile app skills for a better future",
        lead : "Provides you with the latest online learning system and material that will help your knowledge grow",
        btn_text_1 : "Get started",
        btn_text_2 : "Contact us"
    }

    return (

        <>

        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={hero_data.image_url} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">{hero_data.title}</h1>
                    <p className="lead">{hero_data.lead}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-md text-light" style={{ "backgroundColor": "#3BAA66" }}><b>{hero_data.btn_text_1}</b></button>
                        <button type="button" className="btn btn-md text-dark bg-light"><b>{hero_data.btn_text_2}</b></button>
                    </div>
                </div>
            </div>
        </div>
        
        </>

    )

}

export default Hero