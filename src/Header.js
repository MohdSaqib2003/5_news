import React from "react";
import './Header.css';

const Header = ({ onClickHandler }) => {

    const close_menu=()=>{
        console.log('close menu called');
        
        if(window.innerWidth <= 768){
            const ele = document.querySelector('.menu');
            console.log("Style : ",window.getComputedStyle(ele).getPropertyValue("display"));
            ele.style.display = 'none';
            console.log("Style : ",ele.style.display);            
        }
    }


    const btns = document.getElementsByClassName('button');
    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener('click',close_menu);
    }

    

    const respon_fun = ()=>{
        // const ele = document.querySelector('.menu');
        // console.log(ele);
        // console.log("Display : ",ele.style.display);
        // var temp = window.getComputedStyle(ele).getPropertyValue("display");
        // console.log("temp : ",temp);
        // if(temp === 'flex'){
        //    temp = 'block';
        // }else if(temp !== 'none'){
        //     temp = 'none';
        // }
    }
    //     // let ele = document.querySelector('.menu');
    //     // if(ele.style.display === 'none'){
    //     //     ele.style.display = 'block';
    //     // }else{
    //     //     ele.style.display = 'none';
    //     // }
        // console.log('Toggle');
    // })

    return (<>
        <header>
          

            <div className="ui inverted segment" style={{ marginBottom: '1px' }}>
                <h1> <a href=""> 5 sec </a></h1>
                <nav className="navbar">
                    <div className="logo"></div>

                    <ul className="nav-links">
                        <span id="toggle"> </span>
                        <input type="checkbox" id="checkbox_toggle" />
                        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                        <div className="menu">
                            <li>
                                <button className="ui inverted green button" onClick={() => { onClickHandler('General'); }}>General</button>
                            </li>
                            <li>
                            <button className="ui inverted green button" onClick={() => { onClickHandler('Technology'); }}>Technology</button>
                            </li>
                            <li>
                            <button className="ui inverted green button" onClick={() => { onClickHandler('Science'); }}>Science</button>
                            </li>
                            <li>
                            <button className="ui inverted green button" onClick={() => { onClickHandler('Business'); }}>Business</button>
                            </li>
                            <li>
                            <button className="ui inverted green button" onClick={() => { onClickHandler('Health'); }}>Health</button>
                            </li>
                            <li>
                            <button className="ui inverted green button" onClick={() => { onClickHandler('Sports'); }}>Sports</button>
                            </li>
                            <li>
                            <button className="ui inverted green button" onClick={() => { onClickHandler('Entertainment'); }}>Entertainment</button>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    </>)
}
export default Header;