import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Card.css';

const icon_style = {
    padding: '18px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '22px',
    borderRadius: '35px',
    textAlign: 'center',
    justifyContent: 'center'
}


const Card = (props) => {
    // console.log('Card ', props.news);

    const [index, setIndex] = useState(0);

    const renderedList = props.news.map((val, i) => {
        var time = new Date(val.publishedAt);
        time = time.toLocaleDateString('en-us', {
            year: "numeric", month: "short", day: 'numeric', hour: 'numeric',
            minute: 'numeric'
        });

        var temp_title = val.title.slice(0, val.title.lastIndexOf('-'));

        return (<div className="ui card" key={i} style={{ textAlign: 'left' }}>
            <div className="image">
                <img src={val.urlToImage} />
            </div>
            <div className="content">

                <a className="header" href={val.url}>{temp_title}</a>
                <div className="meta">
                    <span className="date" style={{ fontSize: '0.8em' }}>{time}</span>
                </div>
                <div className="description" style={{ textAlign: 'justify' }}>
                    {val.description}
                </div>

            </div>
            <div className="ui bottom attached button disabled" style={{ textAlign: 'left' }} >
                <span >source</span><br />
                <span style={{ color: 'black' }}> {val.source.name} </span>
            </div>
        </div>)
    })

    const changeToRight = () => {
        // console.log('index : ', index);
        if (index !== props.news.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }

    }

    const changeToLeft = () => {
        // console.log('index : ', index);
        if (index !== 0) {
            setIndex(index - 1);
        } else {
            setIndex(props.news.length - 1);
        }

    }




    // // Left: 37, Right: 39
    document.addEventListener('keydown', (e) => {
        console.log('Key ; ', e.key, " Keycode : ", e.keyCode);

        if (e.keyCode === 37) {
            changeToLeft();
        } else if (e.keyCode === 39) {
            changeToRight();
        }
    })


    return (
        <div>
            <div id="translate"></div>
            <div className='news_card' >
                <i id="left_icon" className="left_icon angle left icon" style={icon_style} onClick={changeToLeft} />
                <center>
                    {renderedList[index]}
                </center>
                <i id="right_icon" className="right_icon angle right icon" style={icon_style} onClick={changeToRight} />

            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return { news: state.News }
}
export default connect(mapStateToProps)(Card);