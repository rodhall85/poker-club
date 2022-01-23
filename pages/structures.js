import { useState } from 'react';

import { getStructures } from "../lib/tournaments";

import { Tab } from '@headlessui/react'

const StructureTabs = ({ structures }) => {
    console.log('ey', structures)
    return (
        <Tab.Group>
            <Tab.List className="w-full flex mx-auto border bg-gradient-to-r from-primary to-secondary rounded-3xl my-4">
                {structures && structures.map(({ name }, index) => {
                    return (
                        <Tab key={`structure-selector-${index}`} className="flex-auto text-center p-2">
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
                            <div className="flex text-right font-semibold border-t-2 border-secondary">
                                <div className="w-1/12">Level</div>
                                <div className="w-3/12">SB</div>
                                <div className="w-3/12">BB</div>
                                <div className="w-3/12">BB Ante</div>
                                <div className="w-2/12">Minutes</div>
                            </div>
                            {levels && levels
                                .filter(level => level.name === name)
                                .map(({ level, smallBlind, bigBlind, bigBlindAnte, minutes, breakMinutes }, index) => {
                                    console.log('levels', levels, breakMinutes);
                                    return (
                                        <>
                                            <div key={`structure-${index}`} className="flex text-right">
                                                <div className="w-1/12">{level}</div>
                                                <div className="w-3/12">{smallBlind}</div>
                                                <div className="w-3/12">{bigBlind}</div>
                                                <div className="w-3/12">{bigBlindAnte}</div>
                                                <div className="w-2/12">{minutes}</div>
                                            </div>
                                            {breakMinutes > 0 && (
                                                <div className="font-bold text-center py-2 my-2 border-y-2 border-secondary">Break - {breakMinutes} minutes</div>
                                            )}
                                        </>
                                    );
                                })
                            }
                        </Tab.Panel>
                    );
                })}
                <div className="border-b-2 border-secondary mb-4"></div>
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
        <div>
            <main className="mx-auto w-11/12 sm:w-9/12 lg:w-6/12 xl:w-4/12 px-4 mt-4">
                <h2 className="text-2xl font-bold">Tournament Structures</h2>
                <StructureTabs structures={structures} />
            </main>
        </div>
    );
}

export default Structures;
