import React from 'react'

export default function Menu() {
    return (
        <div>
            <div id="ourMenu">
                <h2>Our <span className="cursive">Menu</span></h2>
                <div className="menuNav">
                    <button id="btn1" onClick={`filterObjects('special')`}>Special</button>
                    <button id="btn2" onClick={`filterObjects('dosa')`}>Dosa</button>
                    <button id="btn3" onClick={`filterObjects('biriyani')`}>Biriyani</button>
                    <button id="btn4" onClick={`filterObjects('uttpam')`}>Uttpam</button>
                    <button id="btn5" onClick={`filterObjects('snacks')`}>Snacks</button>
                    <button id="btn6" onClick={`filterObjects('drink')`}>Drinks</button>
                </div>

                <div className="menuItem">
                    <div className="box dosa special">
                        <p>Dosa 1</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, odio.</p>
                    </div>
                    <div className="box dosa">
                        <p>Dosa 2</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, excepturi.</p>
                    </div>
                    <div className="box dosa special">
                        <p>Dosa 3</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, excepturi.</p>
                    </div>
                    <div className="box dosa">
                        <p>Dosa 4</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, excepturi.</p>
                    </div>
                    <div className="box dosa special">
                        <p>Dosa 5</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, excepturi.</p>
                    </div>
                    <div className="box dosa">
                        <p>Dosa 6</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, excepturi.</p>
                    </div>

                    <div className="box biriyani">
                        <p>Biriyani 1</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, et!</p>
                    </div>
                    <div className="box biriyani special">
                        <p>Biriyani 2</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, laudantium!</p>
                    </div>
                    <div className="box biriyani special">
                        <p>Biriyani 3</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, laudantium!</p>
                    </div>
                    <div className="box biriyani">
                        <p>Biriyani 4</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, laudantium!</p>
                    </div>
                    <div className="box biriyani">
                        <p>Biriyani 5</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, laudantium!</p>
                    </div>
                    <div className="box biriyani">
                        <p>Biriyani 6</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, laudantium!</p>
                    </div>

                    <div className="box uttpam">
                        <p>Uttpam 1</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.</p>
                    </div>
                    <div className="box uttpam special">
                        <p>Uttpam 2</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.</p>
                    </div>
                    <div className="box uttpam">
                        <p>Uttpam 3</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.</p>
                    </div>
                    <div className="box uttpam">
                        <p>Uttpam 4</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.</p>
                    </div>
                    <div className="box uttpam special">
                        <p>Uttpam 5</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.</p>
                    </div>
                    <div className="box uttpam">
                        <p>Uttpam 6</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, mollitia.</p>
                    </div>

                    <div className="box snacks">
                        <p>Snakes 1</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptate!</p>
                    </div>
                    <div className="box snacks">
                        <p>Snakes 2</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptate!</p>
                    </div>
                    <div className="box snacks special">
                        <p>Snakes 3</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptate!</p>
                    </div>
                    <div className="box snacks">
                        <p>Snakes 4</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptate!</p>
                    </div>
                    <div className="box snacks special">
                        <p>Snakes 5</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptate!</p>
                    </div>
                    <div className="box snacks">
                        <p>Snakes 6</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, voluptate!</p>
                    </div>

                    <div className="box drink">
                        <p>Drink 1</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, adipisci?
                        </p>
                    </div>
                    <div className="box drink">
                        <p>Drink 2</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, adipisci?
                        </p>
                    </div>
                    <div className="box drink">
                        <p>Drink 3</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, adipisci?
                        </p>
                    </div>
                    <div className="box drink">
                        <p>Drink 4</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, adipisci?
                        </p>
                    </div>
                    <div className="box drink">
                        <p>Drink 5</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, adipisci?
                        </p>
                    </div>
                    <div className="box drink">
                        <p>Drink 6</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, adipisci?
                        </p>
                    </div>
                </div>

                <button className="orderNow">Order Now <img src="img/smile.webp" alt=""/></button>
            </div>

        </div>
    )
}
