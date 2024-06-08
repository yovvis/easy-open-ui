export const getDate = (time: string) => {
    const date = new Date(time)
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}
