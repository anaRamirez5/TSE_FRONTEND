export interface Filter {
  date: string;
  license_plate_number: string;
  department: string;
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
  adress_start: string;
  adress_end: string;
  department: string;
  city: string;
  municipality: string;
  total_records: number;
}
