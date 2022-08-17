
import './App.css';
import Loader from './Loader';

function App() {
  return (
    <>
      <div className='main_container'>
        <div className='sec_main_container'>
          <div className='back_ground_container'>
            <div className='back_color'>
              <div className='nav_bar'>
                <span>Home</span>
                <span>service</span>
                <span>contact</span>
                <span>portfolio</span>
                <span>Education</span>
              </div>
              <div className='my_profile'>
                 <div className='my_img'>
                    <img className='image' src="https://github.com/niyamath7010/My_Portfolio/blob/main/src/image.jpg?raw=true" alt='no pic' /> 
                 </div>
                 <div className='myName_text'>
                  <h1>Niyamathullah</h1>
                  <br/>
                  <h1><span className='React'>React Developer</span></h1>
                 </div>
              </div>
              <div className='resume_div'>
                <button className='resume'>RESUME</button>
                <button className='resume'>HIRE ME</button >
              </div>
            </div>
            <div className='white_color'></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

