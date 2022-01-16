import fetchTable from './fetchTable';

const getTournaments = async () => {
    const tournaments = await fetchTable('Tournaments');
    
    const sorted = tournaments.sort((a, b) => {
        const aDate = new Date(a.fields.date);
        const bDate = new Date(b.fields.date);

        return aDate - bDate;
    });

    return {
        tournaments: sorted,
    };
}

const getStructures = async () => {
    const structures = await fetchTable('Structures');
    const ordered = structures.sort((a, b) => {
        return a.fields.level - b.fields.level;
    });

    const structureNames = [...new Set(ordered.map(({fields: {name}}) => name))];
    const structuresByName = structureNames.map(name => {
        const levels = ordered.filter(({fields: {name: structureName}}) => name === structureName);
        return {
            name,
            levels: levels.map(level => level.fields),
        };
    });
    console.log('ss', structuresByName);
    return {
        structures: structuresByName,
    };
};

export { getTournaments, getStructures };
