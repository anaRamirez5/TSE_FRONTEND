export interface FilterDriver {
  date?: string | null;
  page?: number;
  page_size?: number;
}
export interface Filter {
  date?: string | null;
  service_date?: string | null;
  license_plate_number: string | null;
  id_servicio: number | null;
  city: string | null;
  status?: number | null;
  page?: number;
  page_size?: number;
}
export interface City {
  municipality_id: number;
  municipality_name: string;
}
export interface Status {
  status_id: number;
  status_name: string;
}

export interface Inform {
  file_name: string;
  base64: string;
}

export interface stadisticget {
  indicator_date: string;
}
