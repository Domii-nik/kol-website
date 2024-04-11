import Card from "./components/Card";
import './css/output.css';
import Functions from "./functions/Functions";
import Sorted from "./components/sorted";

function App() {
    const {algorithms} = Functions();

    return (
    <div className="App">
        <div className={'flex'}>
            <aside className={'w-1/5 min-w-[375px] p-5'}>
                <Card title={'Sortieralgorithmen'}
                      description={<p> Die hier gegebenen Einstellungsmöglichkeiten passen die <b>Generierung</b> des
                          Arrays an.<br/>Zudem kann hier ausgewählt werden, welche <b>Sortieralgorithmen
                              verglichen</b> werden sollen.</p>}/>
            </aside>
            <main className={'ml-10 mr-10 w-full mt-2 mb-2 pt-5 pb-5'} id={'main'}>
                <div id={'sorted-div'} className={'border-4 border-[#233D4D] rounded-lg mb-2'}>
                    {algorithms.map((Algorithm) => (
                        Algorithm.visible && <Sorted Data={{
                            algorithm: Algorithm.algorithm.toLowerCase(),
                            duration: 'Noch nicht sortiert',
                            sortedArray: ['Noch nicht sortiert']
                        }}/>
                    ))}
                </div>
                <div id='unsorted-div' className='border-4 border-[#233D4D] rounded-lg mt-2'>
                    <h2 className='text-center font-bold pt-2 text-[#FD7014] hover:drop-shadow-xl duration-200'>UNSORTIERT</h2>
                    <p id='unsorted' className='border-2 border-[#233D4D] rounded-lg m-2 text-center p-1'>Noch nicht
                        generiert! <br/> Zum Generieren auf den orangenen Knopf drücken</p>
                </div>
            </main>
        </div>
    </div>
    );
}

export default App;
