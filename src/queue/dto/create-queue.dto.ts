export class CreateQueueDto {
    spec_service_id: string;
    client_id: string;
    client_queue_date_time?: Date;
    queue_number: number;
}
