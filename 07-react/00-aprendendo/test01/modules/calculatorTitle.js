// import react (mandatory step).
import React from 'react';

// Create Functional Component.
// Takes title as pros.value.
const CalculatorTitle = (porps) => {
    return(
        <div calssName="calculator-title" >
            {props.value}
        </div>
    );
};

// export calculator title.
export default CalculatorTitle;
