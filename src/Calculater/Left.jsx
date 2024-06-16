import Dollar from '../assets/images/icon-dollar.svg';
import Person from '../assets/images/icon-person.svg';
import { useState } from 'react';

function Left({ arg, setArg }) {
    const [focusInput, setFocusInput] = useState('');
    const [selectedTip, setSelectedTip] = useState(null);
    const [showError, setShowError] = useState(false);

    const handleBillChange = (event) => {
        const bill = event.target.value;
        setArg({ ...arg, amount: bill });
    };

    const handlePeopleChange = (event) => {
        const people = event.target.value;
        setShowError(people === '0');
        setArg({ ...arg, people: people });
    };

    const handleTipChange = (event) => {
        const tip = event.target.value;
        setSelectedTip(tip);
        setArg({ ...arg, tip: tip });
    };

    return (
        <div className="grid mb-6 gap-8 text-sm font-semibold max-w-md">
            <label htmlFor="bill" className="relative">
                <p className="font-semibold text-[var(--Grayish-cyan)] mb-1">Bill</p>
                <input
                    type="text"
                    name="bill"
                    id="bill"
                    className={`rounded-lg text-[var(--Grayish-cyan)] text-right bg-[var(--Very-light-grayish-cyan)] w-full py-2 font-semibold px-2 ${focusInput === 'bill' ? ' outline-none border-2 border-[var(--Strong-cyan)]' : ''}`}
                    value={arg.amount}
                    onChange={handleBillChange}
                    onFocus={() => setFocusInput('bill')}
                    onBlur={() => setFocusInput('')}
                />
                <img src={Dollar} className="absolute bottom-2 pb-1 left-3" />
            </label>

            <div>
                <p className="font-semibold text-[var(--Grayish-cyan)] mb-3">Select Tip %</p>
                <div className="grid grid-cols-2 md:grid-cols-3 place-items-center gap-4">
                    {[5, 10, 15, 25, 50].map((tip) => (
                        <label
                            key={tip}
                            className={`hover:bg-[var(--Strong-cyan)] cursor-pointer block w-full text-center py-1 rounded-md font-bold text-xl ${selectedTip == tip ? 'bg-green-500 text-white' : 'bg-[var(--Very-dark-cyan)] text-[var(--Light-grayish-cyan)]'}`}
                            htmlFor={`tip${tip}`}
                        >
                            {tip}%
                        </label>
                    ))}
                    {[5, 10, 15, 25, 50].map((tip) => (
                        <input
                            key={tip}
                            type="radio"
                            name="tip"
                            className="hidden"
                            id={`tip${tip}`}
                            onChange={handleTipChange}
                            value={tip}
                        />
                    ))}
                    <input
                        className={`hover:bg-[var(--Strong-cyan)] cursor-pointer block bg-[var(--Light-grayish-cyan)] w-full text-center py-1 rounded-md text-[var(--Very-dark-grayish-cyan)] font-bold text-xl ${focusInput === 'customTip' ? 'outline-none border-2 border-[var(--Strong-cyan)]' : ''}`}
                        type="text"
                        name="tip"
                        id="tip6"
                        placeholder="Custom"
                        onChange={handleTipChange}
                        onFocus={() => setFocusInput('customTip')}
                        onBlur={() => setFocusInput('')}
                    />
                </div>
            </div>
            <label htmlFor="people" className="relative">
                <div className="flex justify-between">
                    <p className="font-semibold text-[var(--Grayish-cyan)] mb-3">Number of People</p>
                    {showError && <span className="text-red-400 text-sm">Can't be zero</span>}
                </div>
                <input
                    type="text"
                    name="people"
                    id="people"
                    className={`rounded-lg text-[var(--Grayish-cyan)] text-right bg-[var(--Very-light-grayish-cyan)] w-full py-2 font-semibold px-2 ${focusInput === 'people' ? 'outline-none border-2 border-[var(--Strong-cyan)]' : ''}`}
                    onChange={handlePeopleChange}
                    value={arg.people}
                    onFocus={() => setFocusInput('people')}
                    onBlur={() => setFocusInput('')}
                />
                <img src={Person} className="absolute bottom-2 pb-1 left-3" />
            </label>
        </div>
    );
}

export default Left;
