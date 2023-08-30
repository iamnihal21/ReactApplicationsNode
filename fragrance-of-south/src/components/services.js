import React from 'react'
import per1 from '../img/service1.JPG'
import per2 from '../img/service2.JPG'
import per3 from '../img/service3.JPG'

export default function services() {
    return (
        <div>
            <div id="ourServices">
                <h2>Our <span className="cursive">Services</span></h2>
                <div className="service-img">
                    <div id="homeDel" className="services">
                        <div>
                            <img src={per1} alt=""/>
                        </div>
                        <div>
                            <p>Free Home Delivery</p> <button className="servicebtn">Order Now</button>
                        </div>
                    </div>
                    <div id="dineout" className="services">
                        <div><img src={per2} alt=""/></div>
                        <div>
                            <p>Dine Out</p> <button className="servicebtn">Book Now</button>
                        </div>
                    </div>
                    <div id="catering" className="services">
                        <div><img src={per3} alt=""/></div>
                        <div>
                            <p>Catering</p> <button className="servicebtn">Check Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
