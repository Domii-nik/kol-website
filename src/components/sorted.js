function Sorted({Data}) {

    return (
        <div className='border-2 rounded-lg m-2 border-[#233D4D] duration-300' id={Data.algorithm + '-div'}>
            <table className='w-full'>
                <thead>
                <tr>
                    <th scope={'col'}
                        className='w-1/5 border-b-2 border-r-2 border-[#233D4D]'>{Data.algorithm.toUpperCase()}</th>
                    <th scope={'col'} className='w-full'>SORTIERT</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td id={Data.algorithm + '-time'} className='border-r-2 border-[#233D4D] text-center'>Benötigte
                        Zeit:<br/><b>{Data.duration}</b></td>
                    <td id={Data.algorithm + '-sorted'} className='pl-2 pr-2'>{Data.sortedArray.join(', ')}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Sorted