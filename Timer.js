'use strict';

const e = React.createElement;

class Timer extends React.Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 90
    };

    runTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 0.01;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
                alert("Safe!");
            }
        }, 10);
    };

    render() {
        const { timerTime } = this.state;
        return (
            <div>
                <h1>{parseInt(timerTime,10)}</h1>
                <button onClick={this.runTimer}>Start</button>
            </div>
        );
    }
}

cosnt domContainer = document.querySelector('#root');
ReactDOM.render(e(Timer), domContainer);
