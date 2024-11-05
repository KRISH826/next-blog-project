import { format, parseISO } from 'date-fns';


export const formattedDate = (publishDate: string): string => {
    const date = parseISO(publishDate);
    return format(date, "MMMM d, yyyy");
};