import React, {useState} from 'react';

function F8() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div  style={{marginLeft:"30%"}}>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <input
                        type="radio"
                        id="option1"
                        name="options"
                        value="option1"
                        checked={selectedOption === 'option1'}
                        onChange={handleOptionChange}
                    />
                    <label className="custom-control-label ms-3" htmlFor="option1">
                        Option 1
                    </label>
                </div>
                <span className="border rounded px-1">Value 1</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <input
                        type="radio"
                        id="option2"
                        name="options"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={handleOptionChange}
                    />
                    <label className="custom-control-label ms-3" htmlFor="option2">
                        Option 2
                    </label>
                </div>
                <span className="border rounded px-1">Value 2</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <input
                        type="radio"
                        id="option3"
                        name="options"
                        value="option3"
                        checked={selectedOption === 'option3'}
                        onChange={handleOptionChange}
                    />
                    <label className="custom-control-label ms-3" htmlFor="option3">
                        Option 3
                    </label>
                </div>
                <span className="border rounded px-1">Value 3</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <input
                        type="radio"
                        id="option4"
                        name="options"
                        value="option4"
                        checked={selectedOption === 'option4'}
                        onChange={handleOptionChange}
                    />
                    <label className="custom-control-label ms-3" htmlFor="option4">
                        Option 4
                    </label>
                </div>
                <span className="border rounded px-1">Value 4</span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <input
                        type="radio"
                        id="option5"
                        name="options"
                        value="option5"
                        checked={selectedOption === 'option5'}
                        onChange={handleOptionChange}
                    />
                    <label className="custom-control-label ms-3" htmlFor="option5">
                        Option 5
                    </label>
                </div>
                <span className="border rounded px-1">Value 5</span>
            </div>
        </div>
    );
}


export default F8;