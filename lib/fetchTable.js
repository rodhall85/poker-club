const fetchTable = async (table) => {
    const res = await fetch(`${process.env.DB_API_URL}/${table}`, {
        headers: {
            'Authorization': 'Bearer ' + process.env.DB_API_KEY,
        }
    });

    const data = await res.json();

    return data.records;
}

export default fetchTable;