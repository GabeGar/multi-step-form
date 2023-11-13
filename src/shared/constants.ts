import { AddOns, Plans } from './types';

export const STEPS = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
};

export const plans: Plans = {
    arcade: {
        monthly: 9,
        yearly: 90,
    },
    advanced: {
        monthly: 12,
        yearly: 120,
    },
    pro: {
        monthly: 15,
        yearly: 150,
    },
};

export const addOns: AddOns = {
    onlineService: {
        monthly: 1,
        yearly: 10,
    },
    largeStorage: {
        monthly: 2,
        yearly: 20,
    },
    customizableProfile: {
        monthly: 2,
        yearly: 20,
    },
};

export const timeSpanText = {
    month: {
        short: 'mo',
        full: 'month',
        fullCapitalized: 'Monthly',
    },
    yearly: {
        short: 'yr',
        full: 'year',
        fullCapitalized: 'Yearly',
    },
};
