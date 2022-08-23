import './contact.css'

function Contact(){
    return(
        <>
            <div className='contact_main_continer'>
                <div className='contact_continer'>
                    <div className='title'>
                        <h1 className='title_name' style={{color:"white"}}>Contact</h1>
                    </div>
                    <div className='input_tag'>
                            <input className='name_input' type="text" placeholder="Enter Your Name"></input><br/><br/>
                            <input className='email_input' type="email" placeholder="enter Your Email"></input>&nbsp
                            <input className='contact_input' type="number" placeholder="Enter Your Contact"></input><br/> <br/>
                            <input className='subject_input' type="text" placeholder="Enter Subject"></input><br/> <br/>
                            <input className='message_input' type="text" placeholder="Enter Your Message"></input>
                            
                    </div>
                    <div className='btn_tag'>
                        <button className='btn'>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;