export interface assignService {
  id_servicio: number;
  f_inicio: string;
  f_final: string;
  t_inicio: string;
  t_final: string;
  placa_movil: string;
  cod_producto: string;
  nom_producto: string;
  product_code: string;
  product_name: string;
  product_city: string;
  origen_servicio: string;
  destino_servicio: string;
  ciudad: string;
  name_conductor: string;
  ape_conductor: string;
  type_car: string;
  name_applicant: string;
  type_document: string;
  estado_servicio: string;
  requerimiento: string;
  requirement: string;
  tipov_funcionario: string;
  nom_funcionario: string;
  tipdocu_funcionario: string;
  total_records: number;
}

export interface licensePlate {
  id_servicio: number;
  license_plate_number: string;
}
