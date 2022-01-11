import { useState } from 'react';

import { getStructures } from "../lib/tournaments";

import { Tab } from '@headlessui/react'

const StructureTabs = ({ structures }) => {
    console.log('ey', structures)
    return (
        <Tab.Group>
            <Tab.List className="w-6/12 flex mx-auto border bg-gradient-to-r from-primary to-secondary rounded-3xl my-4">
                {structures && structures.map(({ name }, index) => {
                    console.log('name', name);
                    return (
                        <Tab key={`structure-selector-${index}`} className="flex-1 text-center p-2">
                            {({ selected }) => (
                                <button
                                    className={`${selected ? 'bg-white' : ''} py-2 px-4 rounded-3xl w-full font-bold`}
                                >
                                    {name}
                                </button>
                            )}
                        </Tab>
                    );
                })}
            </Tab.List>
            <Tab.Panels>
                {structures && structures.map(({ name, levels }, index) => {
                    return (
                        <Tab.Panel key={`structure-content-${index}`}>
                            <div className="flex text-right w-9/12 mx-auto font-semibold">
                                <div className="w-1/12">Level</div>
                                <div className="w-3/12">Small Blind</div>
                                <div className="w-3/12">Big Blind</div>
                                <div className="w-3/12">Ante</div>
                                <div className="w-2/12">Minutes</div>
                            </div>
                            {levels && levels
                                .filter(level => level.name === name)
                                .map(({ level, smallBlind, bigBlind, ante, minutes }, index) => {
                                    console.log('levels', levels);
                                    return (
                                        <div key={`structure-${index}`} className="flex text-right w-9/12 mx-auto">
                                            <div className="w-1/12">{level}</div>
                                            <div className="w-3/12">{smallBlind}</div>
                                            <div className="w-3/12">{bigBlind}</div>
                                            <div className="w-3/12">{ante}</div>
                                            <div className="w-2/12">{minutes}</div>
                                        </div>
                                    );
                                })
                            }
                        </Tab.Panel>
                    );
                })}
            </Tab.Panels>
        </Tab.Group>
    )
}

export async function getStaticProps() {
    const structures = await getStructures();
    return {
        props: {
            structures
        }
    }
};

const Structures = ({ structures: { structures } }) => {
    const [selectedStructure, setSelectedStructure] = useState(structures[0]);
    console.log('ff', structures);
    return (
        <div className="w-full">
            <main className="mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-6/12 py-4">
                <h2 className="text-2xl font-bold">Tournament Structures</h2>
                
                <StructureTabs structures={structures} />

                {/* {structures && structures.map(({ levels: {
                    level,
                    smallBlind,
                    bigBlind,
                    ante,
                    minutes,
                } }, index) => {
                    console.log('stuff')
                    return (
                        <div key={`structure-${index}`} className="flex text-right w-9/12 mx-auto">
                            <div className="w-1/12">{level}</div>
                            <div className="w-3/12">{smallBlind}</div>
                            <div className="w-3/12">{bigBlind}</div>
                            <div className="w-3/12">{ante}</div>
                            <div className="w-2/12">{minutes}</div>
                        </div>
                    );
                })} */}
            </main>
        </div>
    );
}

export default Structures;
