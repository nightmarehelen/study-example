import React,{Component} from 'react'
import './Home.css'

class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'Carlos'
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name: 'Cristina' // Here we update the value of the state
            });
        }, 1000);
    }
    render(){
        console.log(this.state.name);
        const buttonStyle = {
            backgroundColor: 'gray',
            border: '1px solid black'
        };

        return(

        <div className="Home">
            <h1>Welcome to Codejobs, My Name is {this.state.name}</h1>

            <p>
                In this recipe you will learn how to add styles to
                components. If you want to learn more you can visit
                our Youtube Channel at
                <a href="http://youtube.com/codejobs">Codejobs</a>.
            </p>
            <p><button style={buttonStyle}>Click Me</button></p>
        </div>
        )
    }
}

export default Index;