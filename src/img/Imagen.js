import React, {Component} from 'react';
import Aquaspot3 from './Aquaspot3.png';

class IMAGEN extends Component {
    render(){
        return(
            <div className="IMAGEN">
            <img src={Aquaspot3} style={{
                    width: 150,
                    height: 130,
                    marginRight: 0,
                    marginLeft: 50,
                    marginBottom: 0,
                    marginTop: 0}}/>
            </div>
        );
    }
}

export default IMAGEN ;
