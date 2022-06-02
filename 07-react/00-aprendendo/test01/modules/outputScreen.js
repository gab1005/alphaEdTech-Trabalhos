// import react (madatory step).
import React from 'react';

// import output screen row.
import OutputScreenRow from './outputScreenRow.js';

// Functional Component.
// Use to hold two screen rows.
const OutputScreen = () => {
    return(
        <div calssName="screen" >
            <OutputScreenRow />
            <OutputScreenRow />
        </div>
    );
};

// export output scree.
export default OutputScreen;
