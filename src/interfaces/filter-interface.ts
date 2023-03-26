export interface LaunchFilterFields {
  fieldName: string,
  value: string | number | null | any,
  placeholder?: string,
  fieldType: string,
}

export interface FilterSchema {
  filterBy: string,
  filterValue: string | boolean,
}
