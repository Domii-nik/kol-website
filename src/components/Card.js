import '../css/output.css';
import Button from "./Button";
import Functions from '../functions/Functions'

function Card({img, description, title}) {
    const {handleChange, generate} = Functions();

    return (
        <div className='flex flex-col rounded-2xl h-auto w-full bg-[#EEEEEE] shadow-xl mt-2 ml-2 mr-2 mb-2'>
            {img === undefined ? null :
                <figure className='flex justify-center items-center rounded-2xl w-full'>
                    <img
                        src={img.src === undefined ? 'https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/error-image-photo-icon.png' : img.src}
                        alt={img.alt} className={'rounded-t-2xl w-full' + (img.style === undefined ? '' : img.style)}
                    />
                </figure>
            }
            <div className="flex flex-col p-8">
                <div
                    className="text-2xl font-bold text-[#374151] pb-6 underline decoration-[#FD7014] decoration-4 hover:drop-shadow-xl duration-150">{title}</div>
                <div className="text-[16px] text-[#374151] mb-8">{description}</div>

                {/* INPUTS */}
                <div>
                    <h2 className={'font-bold text-[18px] mb-2 underline decoration-[#FD7014] decoration-2 text-[#222831] hover:drop-shadow-xl duration-200'}>Einstellungen</h2>
                    {/* COUNT */}
                    <div>
                        <label htmlFor="count" className='font-bold label'>Anzahl generierter Zahlen</label>
                        <input type="number" id='count' className='w-full p-1 ml-1 mr-1' defaultValue={100} min={100}
                               step={10}/>
                    </div>

                    {/* MIN */}
                    <div>
                        <label htmlFor="min" className='font-bold label'>Minimaler Wert</label>
                        <input type="number" id='min' className='w-full p-1 ml-1 mr-1' defaultValue={1} min={1}/>
                    </div>

                    {/* MAX */}
                    <div>
                        <label htmlFor="max" className='font-bold label'>Maximaler Wert</label>
                        <input type="number" id='max' className='w-full p-1 ml-1 mr-1' defaultValue={100} min={2}/>
                    </div>

                    {/* ALGORITHMS (Checkboxen)*/}
                    <div className='flex flex-col mt-2'>
                        <h2 className='font-bold text-[18px] mb-2 underline decoration-[#FD7014] decoration-2 text-[#222831] hover:drop-shadow-xl duration-200'>Algorithmen</h2>
                        <div className=''>
                            <input type="checkbox" id='bubblesort' className='mr-2' onClick={handleChange}
                                   defaultChecked={true}/>
                            <label htmlFor="bubblesort" className={'font-bold text-[#222831]'}>Bubblesort</label>
                        </div>
                        <div className='mt-2 mb-2'>
                            <input type="checkbox" id='mergesort' className='mr-2' onClick={handleChange}
                                   defaultChecked={true}/>
                            <label htmlFor="mergesort" className={'font-bold text-[#222831]'}>Mergesort</label>
                        </div>
                        <div className=''>
                            <input type="checkbox" id='quicksort' className='mr-2' onClick={handleChange}
                                   defaultChecked={true}/>
                            <label htmlFor="quicksort" className='font-bold text-[#222831]'>Quicksort</label>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col justify-center pt-6">
                    <Button text={'Generieren und Sortieren'} width={'w-full'} color={'primary'}
                            onClick={() => generate()} id={1}/>
                </div>
            </div>
        </div>
    );

}

export default Card