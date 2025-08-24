import { SafeHtml } from "@angular/platform-browser"

export interface FieldPlusPlus {
  type: string,
  label: string ,
  sanitized_label: SafeHtml,
  name: string,
  required: boolean,
  options?: [
    {
      label: string,
      value: string
    }
  ],
  uuid: string
}