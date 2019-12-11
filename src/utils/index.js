const meses = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC']

export const getAbbrevetionMonth = index => {
    return meses[index-1].toLowerCase()
}