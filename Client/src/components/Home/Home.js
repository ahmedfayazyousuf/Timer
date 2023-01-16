import React from 'react';
import { useTimer } from "./useTimer";
import "./Home.css";
import "./Signup.css";



const Home = () => { 
    const { pause, running, seconds, start, stop} = useTimer();
    return (
        <>
            <div className="form-body">
                <div className="form-holder">
                    <div className="form-items">
                        <div  className="profilepanel" style={{padding: '20px', paddingLeft: '40px',  paddingRight: '40px', borderRadius:'40px', border:'solid 5px white', borderColor: 'white'}}>
                            <p style = {{
                                color: 'white',
                                fontSize: '100px',
                            }} id="counter">{seconds}</p>

                            <button className="start-button" onClick={running ? pause : start}
                            style={{
                                margin: '10px', 
                                backgroundColor: '#105a7f', 
                                color: 'white', 
                                fontWeight: '500', 
                                borderRadius: '10px', 
                                width: '160px', 
                                height: '35px', 
                                border: 'none'
                            }}>
                                START / STOP
                            </button>

                            <button className="stop-button" onClick={stop}
                            style={{
                                margin: '10px', 
                                backgroundColor: '#105a7f', 
                                color: 'white', 
                                fontWeight: '500', 
                                borderRadius: '10px', 
                                width: '160px', 
                                height: '35px', 
                                border: 'none'
                            }}>
                                RESET
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home






