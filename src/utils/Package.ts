export type PackageDetails = {
    deliveryProgressPercentage: number;
    customer: string;
    weight: number;
    price: number;
    departureDay: number;
    departureMonth: string;
    driver: string;
};

export type Package = {
    city: string;
    isReceived: boolean;
    orderId: string;
    details: PackageDetails;
};
