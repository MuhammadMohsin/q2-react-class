import React, { Component} from 'react';

export class Footer extends Component{

    render(){
        return(
            <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'black',
                color: 'white',
                height: '30px'
            }}>Footer</div>
        )
    }
}
