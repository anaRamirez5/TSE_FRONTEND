export interface Filter {
  date: string;
  license_plate_number: string;
  id_servicio: string;
  city: string;
  page: number;
  page_size: number;
}

export interface HistoryTable {
  id_servicio: number;
  date: string;
  hour_start: string;
  hour_end: string;
  license_plate_number: string;
  product_code: string;
  product_name: string;
  product_city: string;
  adress_start: string;
  adress_end: string;
  city: string;
  name_driver: string;
  type_car: string;
  name_applicant: string;
  type_document: string;
  requirements: string;
  total_records: number;
}
