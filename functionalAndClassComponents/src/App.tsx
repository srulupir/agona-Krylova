import React, {Component} from 'react';
import './App.css';

class CComponent extends Component<any, any> {
    constructor(props: React.ReactNode) {
        super(props);
        this.state = {color: null};
    }
    changeColor() {
        this.setState({
            color: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +
                (Math.floor(Math.random() * 256)) + ',' +
                (Math.floor(Math.random() * 256)) + ')'
        })
    }

    render() {
        return (
            <div>
                <h2>Class component</h2>
                <div style={{backgroundColor: this.state.color}}
                     onClick={this.changeColor.bind(this)}>
                    <h3>Click on me</h3>
                </div>
            </div>

        )
    }
}

type UserProfileProps = {
    firstName: string
    village: string
    wasAkatsukiMember : boolean
    alive: boolean
}

const Fcomponent = ({firstName, village, wasAkatsukiMember, alive }: UserProfileProps) => {
    if ((village === 'konoha') && (wasAkatsukiMember === true) && (alive === true)) {
        return (<div className='text_fc'>
                    <h2>Functional component</h2>
                    <div>Sasuke, return to Konoha..</div>
                </div>)
    }
    return (<div>
                <h2>Functional component</h2>
                <div>Oh, {firstName}, have a good day, ninja!</div>
            </div>)
}

function App() {
  return (
      <div className='App'>
          <CComponent/>
          <Fcomponent firstName='sakura' village='konoha' wasAkatsukiMember={false} alive={true} />
          <Fcomponent firstName='sasuke' village='konoha' wasAkatsukiMember={true} alive={true} />
      </div>
  )
}
export default App;
