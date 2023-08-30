import React from 'react'
import per1 from '../img/person11.png'
import per2 from '../img/person21.png'
import per3 from '../img/person31.png'

export default function Team() {
    return (
        <div>
            <div id="ourTeam">
                <h2>Our <span className="cursive">Team</span></h2>
                <div className="team-main">
                    <div className="team-member">
                        <div>
                            <img id="p1" src={per1} alt="" />
                        </div>
                        <div>
                            <p>Mr. Patel <a href="https://www.instagram.com" target="_blank"><img className="igImg" height="20px"
                                src="img/instgram.png" alt="instgram"/></a></p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div><img id="p2" src={per2} alt="" /></div>
                        <div>
                            <p>Mrs. Chef <a href="https://www.instagram.com" target="_blank"><img className="igImg" height="20px"
                                src="img/instgram.png" alt="instgram"/></a></p>
                        </div>
                    </div>
                    <div className="team-member">
                        <div><img id="p3" src={per3} alt=""/></div>
                        <div>
                            <p>Mr. Chef <a href="https://www.instagram.com" target="_blank"><img className="igImg" height="20px"
                                src="img/instgram.png" alt="instgram" /></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
