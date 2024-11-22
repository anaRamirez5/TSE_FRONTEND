export interface Filter {
  date: string;
  license_plate_number: string;
  department: string;
  city: string;
  page: number;
  page_size: number;
}

export interface HistoryTable {
  date: string;
  hour_start: string;
  hour_end: string;
  license_plate_number: string;
  adress_start: string;
  adress_end: string;
  departament: string;
  city: string;
  municipality: string;
}
