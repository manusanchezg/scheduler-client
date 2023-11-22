import { ServiceStatus } from "../enums/serviceStatus";

export interface Appointment {
    id: number;
    clientName: string;
    date: string;
    status: ServiceStatus;
    service: string;
}