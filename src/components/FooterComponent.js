import React ,{ Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }

        render(){
            return(
                <div>
                    <header>
                        <nav className="footer">
                          <div>
                                < span> All copyrights reserved @Customer Management System</span>
                          </div>
                        </nav>
                    </header>
                </div>
            );
        }
}

export default FooterComponent