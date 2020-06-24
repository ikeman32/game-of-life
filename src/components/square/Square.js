import React, { Component } from 'react';
//import './square.scss'
class Square extends Component {
    render() {
        const color_ = this.props.color;
        return (
            <td className='button'
                style={{
                    overflow: 'hidden',
                    width: '5px',
                    height: '5px',
                    border: '.5px solid black',
                    backgroundColor: 'burlywood',
                    borderColor: 'black'
                }
                }
            >
                <div
                    style={{
                        border:"1px solid",
                        backgroundColor: color_,
                        height: '5px',
                        borderColor: color_
                    }}
                ></div>
            </td >
        )
    }
}

export default Square;