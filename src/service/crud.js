export const deleteFunc = (data, id) => data.filter(elem => elem.id !== Number(id))
export const updateFunc = (data, id, body) => data
export const createFunc = (data, body) => data