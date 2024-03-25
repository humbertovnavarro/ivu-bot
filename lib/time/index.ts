export enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

/**
 * 
 * @param timestamp 
 * @param weekday 
 * @param occurrence 
 * @returns if timestamp is the nth occurence of weekday based on local time
 */
export function weekdayOccurence(date: Date): 1 | 2 | 3 | 4 | 5 {
    const weekday = date.getDay();
    const dayOfMonth = date.getDate();
    if(dayOfMonth <= 7) {
        return 1;
    }
    const occurence = Math.ceil(dayOfMonth / 7);
    if(occurence > 6) {
        throw new Error("weekday occurence out of range")
    }
    return occurence as 1 | 2 | 3 | 4 | 5;
}

export function isIVUDay(date: Date) {
    return date.getDay() === Weekday.Friday && weekdayOccurence(date) === 2;
}