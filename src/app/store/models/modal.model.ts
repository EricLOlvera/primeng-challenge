import { Item } from '.';

export interface ModalState {
    visible: boolean;
    isDirty: boolean;
    content: Item;
}
