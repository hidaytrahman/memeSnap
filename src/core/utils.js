
export const getDate = (date = new Date()) => {
    
    const d = new Date(date);

    return `${d.getDate()} ${d.getFullYear()}`
}


export const getTimestamp = () => {
    return  Date.parse(new Date())
}

export const timeStamp = Date.parse(new Date());