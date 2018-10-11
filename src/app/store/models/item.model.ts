export interface Item {
    id: number;
    description: string;
    code: string;
    role: 'AGENT' | 'RN' | 'MD' | null;
    active: boolean;
    last_modified_by: string;
    last_modified_date: Date;
    after_call_work: boolean;
    restrict_call_history: boolean;
}
