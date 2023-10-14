export type PackageDetails = {
    deliveryProgressPercentage: number;
    customer: string;
    weight: number;
    price: number;
    departureDay: number;
    departureMonth: string;
    driver: string;
};

export type DeliveryDetails = {
    departureCity: string;
    arrivalCity: string;
    currentLocation: string;
    kmsLeft: number;
    lastStop: number;
};

export type Package = {
    city: string;
    isReceived: boolean;
    orderId: string;
    packageDetails: PackageDetails;
    deliveryDetails: DeliveryDetails;
};
