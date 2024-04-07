/*
    USAGE:
    const accordion = [
        {
            key: 1,
            header: 'Unsortiert',
            body: 'Unsortiert - Body',
            isOpen: false
        },{
            key: 2,
            header: 'Bubblesort',
            body: 'Bubblesort - Body',
            isOpen: false
        },{
            key: 3,
            header: 'Mergesort',
            body: 'Mergesort - Body',
            isOpen: false
        },{
            key: 4,
            header: 'Quicksort',
            body: 'Quicksort - Body',
            isOpen: false
        }
    ]

    <Accordion Items={accordion}/>
 */

import {useState} from "react";

function Accordion({Items}) {
    const [accordionItems, setAccordionItems] = useState(Items)

    function updateAccordion(key) {
        const updatedAccordion = accordionItems.map((Item) => {
            if (Item.key === key) {
                return {...Item, isOpen: !Item.isOpen};
            } else {
                return {...Item, isOpen: false};
            }
        });

        setAccordionItems(updatedAccordion);
    }

    return (
        <div id={'Accordion'} className={'border-2 h-96'}>
            {accordionItems.map((Item) => (
                <AccordionItem id={Item.key} onClick={() => updateAccordion(Item.key)} isOpen={Item.isOpen}
                               header={Item.header} body={Item.body}/>
            ))}
        </div>
    )
}

function AccordionItem({key, onClick, isOpen, header, body}) {

    return (
        <div id={`AccordionItem-${key}`} className={'bg-red-300'} onClick={onClick}>
            <AccordionItemHeader key={key} text={header}/>
            {isOpen && <AccordionItemBody text={body}/>}
        </div>
    )
}

function AccordionItemHeader({key, text}) {

    return (
        <h2 id={`AccordionItem-${key}-Header`}>
            {text}
        </h2>
    )
}

function AccordionItemBody({key, text}) {

    return (
        <p id={`AccordionItem-${key}-Body`}>
            {text}
        </p>
    )
}

export default Accordion