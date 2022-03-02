import React, { Component } from 'react'
import './GlassHome.css'

let dataGlases = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]
export default class GlassHome extends Component {
    state = {
        img: '',
        nameGlass: '',
        content: ''
    }
    render() {
        let handleClick = (glass, nameGlass, content) => {
            let newState = {
                img: `./glassesImage/${glass}.png `,
                nameGlass: nameGlass,
                content: content
            }
            
            this.setState(newState)
        }
        return (
            <div className="glass__container">

                <div className='container'>

                    <h1 className='text-center pb-5 pt-3'>GLASS APP ONLINE</h1>
                    <div className="row glass__face ">
                        <div className="col-4 mr-5" id='showGlass'>
                            <img className='img-fluid' src="./glassesImage/model.jpg" alt="" />
                            <div className="content">
                                <h4>{this.state.nameGlass}</h4>
                                <p>{this.state.content}</p>
                            </div>
                        </div>
                        <div className="col-4 ml-5">
                            <img className='img-fluid' src="./glassesImage/model.jpg" alt="" />

                        </div>
                    </div>
                    <div className="glass" id='glass'>
                        <img src={this.state.img} alt="" />

                    </div>

                    <div className="listGlass mt-5" id='listGlass'>
                        <div className="row d-inline-flex align-content-center">
                            <div className="col-2" onClick={() => {
                                handleClick('v1', "GUCCI G8850U", `${dataGlases[0].desc}`)
                            }}>
                                <img className='' src="./glassesImage/g1.jpg" alt="" />
                            </div>
                            <div className="col-2" onClick={() => {
                                handleClick('v2', `${dataGlases[1].name}`, `${dataGlases[1].desc}`)
                            }}>
                                <img className='' src="./glassesImage/g2.jpg" alt="" />
                            </div>
                            <div className="col-2" onClick={() => {
                                handleClick('v3', `${dataGlases[2].name}`, `${dataGlases[2].desc}`)
                            }}>
                                <img className='img__positon' src="./glassesImage/g3.jpg" alt="" />
                            </div>
                            <div className="col-2" onClick={() => {
                                handleClick('v4', `${dataGlases[3].name}`, `${dataGlases[3].desc}`)
                            }}>
                                <img className='img__positon' src="./glassesImage/g4.jpg" alt="" />
                            </div>
                            <div className="col-2" onClick={() => {
                                handleClick('v5', `${dataGlases[4].name}`, `${dataGlases[4].desc}`)
                            }}>
                                <img className='img__positon' src="./glassesImage/g5.jpg" alt="" />
                            </div>

                            <div className="col-2" onClick={() => {
                                handleClick('v6', `${dataGlases[5].name}`, `${dataGlases[5].desc}`)
                            }}>
                                <img className='img__positon' src="./glassesImage/g6.jpg" alt="" />
                            </div>
                            <div className="col-2" onClick={() => {
                                handleClick('v7', `${dataGlases[6].name}`, `${dataGlases[6].desc}`)
                            }}>
                                <img className='' src="./glassesImage/g7.jpg" alt="" />
                            </div>
                            <div className="col-2" onClick={() => {
                                handleClick('v8', `${dataGlases[7].name}`, `${dataGlases[7].desc}`)
                            }}>
                                <img className='img__positon' src="./glassesImage/g8.jpg" alt="" />
                            </div>
                            <div className="col-2" onClick={() => {
                                handleClick('v9', `${dataGlases[8].name}`, `${dataGlases[8].desc}`)
                            }}>
                                <img className='img__positon' src="./glassesImage/g9.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

