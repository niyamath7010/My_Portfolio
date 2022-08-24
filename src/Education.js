import "./edcuation.css"

function Education(){
    return(
        <>
            <div className="edu_main_container">
                <div className="edu_container">
                    <h2 className="edu_title">Education</h2>
                </div>
                <div className="edu_detail">
                    <div className="my_tech">
                            <h3>Front End Development - 2021</h3>
                    </div>
                    <div className="pre_tech">
                            <h3>Prep For Tech Insitiute</h3>
                    </div>
                </div>
                <br/>
                <br/>
                <hr/>
                <div className="college_detail">
                    <div className="my_deg">
                            <h3>Bsc In Computer Science - 2020</h3>
                    </div>
                    <div className="college_name">
                        <h3>New College (Automouse) </h3>
                        <h5 className="college_per">66% Percentage</h5>
                    </div>
                </div>
                <br/>
                <br/>
                <hr/>
                <div className="hhsc_detail">
                    <div className="scl_course">
                        <h3>HSC-2017 (State Board)</h3>
                    </div>
                    <div className="scl_name">
                       <h3>Princess , Matric Hr Sec School Chennai</h3>
                       <h5>50% Percentage</h5>
                    </div>
                </div>
                <br/>
                <br/>
                <hr/>
                <div className="sslc_detail">
                    <div className="sslc_course">
                        <h3>SSLC-2015 (State Board)</h3>
                    </div>
                    <div className="sslc_sch_name">
                       <h3>Princess , Matric Hr Sec School Chennai</h3>
                       <h5>66% Percentage</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;