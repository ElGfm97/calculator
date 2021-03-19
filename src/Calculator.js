import React from "react"


export default class Calculator extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            display: "0"
        };

        this.handleDigit = this.handleDigit.bind(this);
        this.handleDot = this.handleDot.bind(this);
        this.handleOperation = this.handleOperation.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }

    resetAll() {
        this.setState({
            display: "0"
        });
    }

    handleDigit(event) {
        const input = event.target.value;
        if(this.state.display === "0") {
            this.setState({
                display: input
            });
        } else {
            this.setState({
                display: this.state.display + input
            });
        }
    }

    handleDot() {
        const splitDisplay = this.state.display.split(/[^0-9.]/);
        const lastToken = splitDisplay[splitDisplay.length-1];

        if(!lastToken.includes(".")){
            this.setState({
                display: this.state.display + "."
            });
        }
    }

    handleOperation(event) {
        const op = event.target.value;
        let display = this.state.display;
        let temp = display;

        if (op === "-") {
            if (
                display.endsWith("--") ||
                display.endsWith("+-") ||
                display.endsWith("*-") ||
                display.endsWith("/-")
            ) {
                temp = temp.slice(0, temp.length - 2) + "-";
            } else {
                temp = temp + "-";
            }
        } else {
            if (
                display.endsWith("+-") ||
                display.endsWith("*-") ||
                display.endsWith("/-")
            ) {
                temp = temp.slice(0, temp.length - 2) + op;
            } else if (
                display.endsWith("+") ||
                display.endsWith("-") ||
                display.endsWith("*") ||
                display.endsWith("/")
            ) {
                temp = temp.slice(0, temp.length - 1) + op;
            } else {
                temp = temp + op;
            }
        }

        this.setState({
            display: temp
        });
    }

    handleEquals() {
        let display = this.state.display;
        let res = eval(display).toString();
        this.setState({
            display: res
        });
    }



    render() {
        return (
            <div id="calculator" className="container">
                <div id="display-block" className="container-fluid">
                    <p id="display">{this.state.display}</p>
                </div>
                <div id="keypad" className="container-fluid">
                    <button id="clear" className="btn btn-lg" onClick={this.resetAll}>CLEAR</button>
                    <button id="divide" className="operator btn btn-lg" value="/" onClick={this.handleOperation}>/</button>
                    <button id="multiply" className="operator btn btn-lg" value="*" onClick={this.handleOperation}>*</button>
                    <button id="seven" className="digit btn btn-lg" value="7" onClick={this.handleDigit}>7</button>
                    <button id="eight" className="digit btn btn-lg" value="8" onClick={this.handleDigit}>8</button>
                    <button id="nine" className="digit btn btn-lg" value="9" onClick={this.handleDigit}>9</button>
                    <button id="subtract" className="operator btn btn-lg" value="-" onClick={this.handleOperation}>-</button>
                    <button id="four" className="digit btn btn-lg" value="4" onClick={this.handleDigit}>4</button>
                    <button id="five" className="digit btn btn-lg" value="5" onClick={this.handleDigit}>5</button>
                    <button id="six" className="digit btn btn-lg" value="6" onClick={this.handleDigit}>6</button>
                    <button id="add" className="operator btn btn-lg" value="+" onClick={this.handleOperation}>+</button>
                    <button id="one" className="digit btn btn-lg" value="1" onClick={this.handleDigit}>1</button>
                    <button id="two" className="digit btn btn-lg" value="2" onClick={this.handleDigit}>2</button>
                    <button id="three" className="digit btn btn-lg" value="3" onClick={this.handleDigit}>3</button>
                    <button id="zero" className="digit btn btn-lg" value="0" onClick={this.handleDigit}>0</button>
                    <button id="decimal" value="." className="btn btn-lg" onClick={this.handleDot}>.</button>
                    <button id="equals" className="btn btn-lg" value="=" onClick={this.handleEquals}>=</button>

                </div>

            </div>

        );
    }
}
