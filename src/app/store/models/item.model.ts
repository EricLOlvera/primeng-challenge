export interface Item {
    description: string;
    code: string;
    role: 'AGENT' | 'RN' | 'MD';
    active: boolean;
    last_modified: string;
}
