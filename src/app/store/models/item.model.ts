export interface Item {
    description: string;
    code: number;
    role: 'AGENT' | 'RN' | 'MD';
    active: boolean;
    last_modified: string;
}
