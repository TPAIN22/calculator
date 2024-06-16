import Dollar from '../assets/images/icon-dollar.svg'
import Person from '../assets/images/icon-person.svg'

function Left({arg , setArg}) {
    const handleBillChange = (event) => {
        const bill = event.target.value
        setArg({...arg , amount : bill})
    }
    const handlePeopleChange = (event) => {
        const people = event.target.value
        setArg({...arg , people : people})
    }

    const handleTipChange = (event) => {
        const tip = event.target.value
        setArg({...arg , tip : tip})
    }


    return(<div className="grid mb-6 gap-8 text-lg font-semibold max-w-md "> 
        
        <label htmlFor="bill" className="relative">
            <p className="font-semibold text-[var(--Grayish-cyan)] mb-1 ">Bill</p>
            <input type="text" name="bill" id="bill" className="rounded-lg text-[var(--Very-dark-cyan)] text-right bg-[var(--Very-light-grayish-cyan)] w-full py-2 font-semibold px-2" 
            value={arg.amount}
            onChange={handleBillChange}
            />
            <img src={Dollar} className='absolute bottom-2 pb-1 left-3' />
        </label>
    
        <div>
        <p className="font-semibold text-[var(--Grayish-cyan)] mb-3 ">Select Tip %</p>
            <div className='grid grid-cols-2 md:grid-cols-3 place-items-center gap-4'>
                <label  className=' cursor-pointer block bg-[var(--Very-dark-cyan)] w-full text-center py-1 rounded-md text-[var(--Light-grayish-cyan)] font-bold text-xl' htmlFor="tip1" >5%</label>
                <input type="radio" name="tip" className='hidden' id="tip1" 
                onChange={handleTipChange}
                value={5}/>
            
                <label  className=' cursor-pointer block bg-[var(--Very-dark-cyan)] w-full text-center py-1 rounded-md text-[var(--Light-grayish-cyan)] font-bold text-xl' htmlFor="tip2">10%</label>
                <input type="radio" name="tip" className='hidden' id="tip2" 
                onChange={handleTipChange}
                value={10}/>
            
                <label  className=' cursor-pointer block bg-[var(--Very-dark-cyan)] w-full text-center py-1 rounded-md text-[var(--Light-grayish-cyan)] font-bold text-xl' htmlFor="tip3">15%</label>
                <input type="radio" name="tip" className='hidden' id="tip3" 
                onChange={handleTipChange}
                value={15}/>
            
                <label  className=' cursor-pointer block bg-[var(--Very-dark-cyan)] w-full text-center py-1 rounded-md text-[var(--Light-grayish-cyan)] font-bold text-xl' htmlFor="tip4">25%</label>
                <input type="radio" name="tip" className='hidden' id="tip4" 
                onChange={handleTipChange}
                value={25}/>
            
                <label  className=' cursor-pointer block bg-[var(--Very-dark-cyan)] w-full text-center py-1 rounded-md text-[var(--Light-grayish-cyan)] font-bold text-xl' htmlFor="tip5">50%</label>
                <input type="radio" name="tip" className='hidden' id="tip5" 
                onChange={handleTipChange}
                value={50}/>
               
                <input className=' cursor-pointer block bg-[var(--Light-grayish-cyan)] w-full text-center py-1 rounded-md text-[var(--Very-dark-grayish-cyan)] font-bold text-xl ' type="text" name="tip" id="tip6" 
                placeholder='Custum'
                onChange={handleTipChange}/>
            </div>
        </div>
        <label htmlFor="bill" className="relative">
            <div className='flex justify-between'> 
                <p className="font-semibold text-[var(--Grayish-cyan)] mb-3 ">Number of People</p>
                <span className='text-red-400 text-sm'> Can't be zero </span>
            </div>
            <input type="text" name="bill" id="bill" className="rounded-lg text-[var(--Very-dark-cyan)] text-right bg-[var(--Very-light-grayish-cyan)] w-full py-2 font-semibold px-2" 
            onChange={handlePeopleChange}
            value={arg.people}
            />
            <img src={Person} className='absolute bottom-2 pb-1 left-3' />
        </label>

    </div>)
}
export default Left