export interface Filter {
  date: string | null;
  license_plate_number: string | null;
  id_servicio: string | null;
  city: string | null;
  page: number;
  page_size: number;
}
export interface City {
  municipality_id: number;
  municipality_name: string;
}
