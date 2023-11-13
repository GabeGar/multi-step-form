export interface Inputs {
    name: string;
    email: string;
    phone: string;
    plan: string;
    yearly: boolean;
    onlineService: boolean;
    largeStorage: boolean;
    customizableProfile: boolean;
}

export interface Plans {
    arcade: {
        monthly: number;
        yearly: number;
    };
    advanced: {
        monthly: number;
        yearly: number;
    };
    pro: {
        monthly: number;
        yearly: number;
    };
}

export interface AddOns {
    onlineService: {
        monthly: number;
        yearly: number;
    };
    largeStorage: {
        monthly: number;
        yearly: number;
    };
    customizableProfile: {
        monthly: number;
        yearly: number;
    };
}
