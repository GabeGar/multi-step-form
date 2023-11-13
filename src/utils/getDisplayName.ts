import { capitalize } from './capitalize';

export const getDisplayName = (key: string): string => {
    // Convert camelCase to spaced words (e.g., onlineService => Online Service)
    const words = key
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Insert space between camelCase
        .toLowerCase()
        .split(' ')
        .map((word) => capitalize(word));

    return words.join(' ');
};
