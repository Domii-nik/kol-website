import {bubbleSort as BubbleSort} from "../Algorithms/BubbleSort";
import {mergeSort as MergeSort} from "../Algorithms/MergeSort";
import {quickSort as QuickSort} from "../Algorithms/QuickSort";

function Functions() {
    let algorithms = [
        {
            algorithm: 'bubblesort',
            visible: true
        },
        {
            algorithm: 'mergesort',
            visible: true
        },
        {
            algorithm: 'quicksort',
            visible: true
        }
    ];

    function handleChange(e) {
        if (e.target.checked) {
            switch (e.target.id) {
                case 'bubblesort':
                    algorithms[0].visible = true;
                    changeVisibility(algorithms[0]);
                    break;
                case 'mergesort':
                    algorithms[1].visible = true;
                    changeVisibility(algorithms[1]);
                    break;
                case 'quicksort':
                    algorithms[2].visible = true;
                    changeVisibility(algorithms[2]);
                    break;
                default:
                    console.error('ERROR - couldn\'t change visibility of' + e.target.id)
                    break;
            }
        } else {
            if (visibleAlgorithms() <= 1) {
                alert('Du musst mindestens einen Algorithmus ausgewählt haben!');
                e.target.checked = true;
                return;
            }
            switch (e.target.id) {
                case 'bubblesort':
                    algorithms[0].visible = false;
                    changeVisibility(algorithms[0]);
                    break;
                case 'mergesort':
                    algorithms[1].visible = false;
                    changeVisibility(algorithms[1]);
                    break;
                case 'quicksort':
                    algorithms[2].visible = false;
                    changeVisibility(algorithms[2]);
                    break;
                default:
                    console.error('ERROR - couldn\'t change visibility of' + e.target.id)
                    break;
            }
        }

        const bubblesort = algorithms[0].visible;
        const mergesort = algorithms[1].visible;
        const quicksort = algorithms[2].visible;

        console.clear();
        console.log(`Bubblesort: ${bubblesort}`);
        console.log(`Mergesort: ${mergesort}`);
        console.log(`Quicksort: ${quicksort}`);
    }

    function generate() {
        if (visibleAlgorithms() <= 0) {
            alert('Bitte wähle mindestens einen Algorithmus aus!');
            return null;
        }
        const randomNumbers = [];

        const DoBubblesort = algorithms[0].visible;
        const DoMergesort = algorithms[1].visible;
        const DoQuicksort = algorithms[2].visible;

        const count = parseInt(document.getElementById("count").value);
        const min = parseInt(document.getElementById("min").value);
        const max = parseInt(document.getElementById("max").value);

        if (min > max) {
            alert(`Der minimale Wert (${min}) darf nicht größer sein, als der maximale Wert (${max})!`);
            return null;
        }

        for (let i = 0; i < count; i++) {
            const randomNumber = Math.floor(Math.random() * (max - min)) + (min);
            randomNumbers.push(randomNumber);
        }
        console.log(`Generated array: (count: ${count}, min: ${min}, max: ${max}) \n` + randomNumbers);

        if (DoBubblesort) {
            const sorted = BubbleSort(randomNumbers);
            console.log(`Bubblesort: (Time taken: ${sorted.duration}) \n` + sorted.sortedArray);
            setData(sorted);
        }
        if (DoMergesort) {
            const sorted = MergeSort(randomNumbers);
            console.log(`Mergesort: (Time taken: ${sorted.duration}) \n` + sorted.sortedArray);
            setData(sorted);
        }
        if (DoQuicksort) {
            const sorted = QuickSort(randomNumbers);
            console.log(`Quicksort: (Time taken: ${sorted.duration}) \n` + sorted.sortedArray);
            setData(sorted);
        }

        let unsorted = document.getElementById('unsorted');
        unsorted.textContent = randomNumbers.join(', ');

        return null;
    }

    function visibleAlgorithms() {
        let count = 0;
        for (const Algorithm of algorithms) {
            if (Algorithm.visible) {
                count++;
            }
        }
        return count;
    }

    function changeVisibility(Algorithm) {
        const div = document.getElementById(Algorithm.algorithm + '-div');
        switch (Algorithm.visible) {
            case true:
                div.classList.remove('opacity-50')
                break;
            case false:
                div.classList.add('opacity-50')
                break;
            default:
                console.error('ERROR - couldn\'t change visibility of' + Algorithm.algorithm)
                break;
        }
    }

    function setData(Data) {
        const time = document.getElementById(Data.algorithm.toLowerCase() + '-time');
        const dataField = document.getElementById(Data.algorithm.toLowerCase() + '-sorted');

        time.innerHTML = `Benötigte Zeit:<br/><b>${Data.duration}</b>`;
        dataField.textContent = Data.sortedArray.join(', ');
    }

    return {algorithms, handleChange, generate}
}

export default Functions