// import react (mnadatory step).
import React from 'react';
import Title from './calculatorTitle.js';
import Screen from './outputScreen.js';
import Button from './button.js';
import OutputScreen from './outputScreen.js';

// create a class component calculator.
class Calculator extends React.Component {
    render()
    {
        return(
            <div className="frame" >
                <Title value="Calculator by Gabriel" ></Title>
                <div className="mainCalc">
                    <OutputScreen />
                    <div className="button-row">
                        <Button label={'Clear'} />
                        <Button label={'Delete'} />
                        <Button label={'.'} />
                        <Button label={'/'} />
                    </div>

                    <div className="button-row">
                        <Button label={'7'} />
                        <Button label={'8'} />
                        <Button label={'9'} />
                        <Button label={'*'} />
                    </div>

                    <div className="button-row">
                        <Button label={'4'} />
                        <Button label={'5'} />
                        <Button label={'6'} />
                        <Button label={'-'} />
                    </div>

                    <div className="button-row">
                        <Button label={'1'} />
                        <Button label={'2'} />
                        <Button label={'3'} />
                        <Button label={'+'} />
                    </div>

                    <div className="button-row">
                        <Button label={'0'} />
                        <Button label={'='} />
                    </div>
                </div>
            </div>
        );
    };
};

// export calculator.
export default Calculator;