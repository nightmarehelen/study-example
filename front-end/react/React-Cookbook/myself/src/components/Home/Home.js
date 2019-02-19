import React, {Component} from 'react'
import  "./Home.css"
class Home extends Component {
    constructor() {
        // We need to define super() at the beginning of the
        // constructor to have access to 'this'
        super();

        // Here we initialize our local state as an object
        this.state = {
            name: 'Carlos'
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name: 'Cristina' // Here we update the value of the state
            });
            console.log(this.state.name);
        }, 1000);

    }
    render() {
        const buttonStyle = {
            backgroundColor: 'gray',
            border: '1px solid black'
        };

        return <div className="Home">
            <h1>my name is {this.state.name}</h1>

            <p>
                In this recipe you will learn how to add styles to
                components. If you want to learn more you can visit
                our Youtube Channel at
                <a href="http://youtube.com/codejobs">Codejobs</a>.
            </p>

            <p>
                <button
                    style={{
                        backgroundColor: 'gray',
                        border: '1px solid black'
                    }}
                >
                    Click me!
                </button>
            </p>

            <p>
                <button
                    style={buttonStyle}
                >
                    Click me!
                </button>
            </p>
        </div>
    }
}

export default Home;
