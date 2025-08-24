import { FieldPlusPlus } from "./field-plusplus.interface";

export interface FilePlusPlus {
    title: string,
    fields: FieldPlusPlus[],
    sections: any
}