export interface assignService {
  id_servicio: number;
  f_inicio: string;
  f_final: string;
  t_inicio: string;
  t_final: string;
  placa_movil: string;
  cod_producto: string;
  nom_producto: string;
  origen_servicio: string;
  destino_servicio: string;
  ciudad: string;
  estado_servicio: string;
  requerimiento: string;
  nom_funcionario: string;
  tipdocu_funcionario: string;
  ruta?: string;
  sector_ruta: string;
  incio_viaje?: string;
  fin_viaje?: string;
  isButtonEnabled?: boolean;
  total_records: number;
}

export interface service {
  id_servicio: number[];
  placa_movil: string;
  confirmar_servicio?: boolean;
}
export interface startOrEnd {
  id_servicio: number;
  placa_movil: string;
}

export interface orphanService {
  id_servicio: number;
  f_inicio: string;
  f_final: string;
  t_inicio: string;
  t_final: string;
  cod_producto: string;
  nom_producto: string;
  origen_servicio: string;
  destino_servicio: string;
  placa_movil: string;
  ciudad: string;
  estado_servicio: string;
  requerimiento: string;
  nom_funcionario: string;
  name_conductor: string;
  ape_conductor: string;
  tipov_funcionario: string;
  tipdocu_funcionario: string;
  ruta?: string;
  sector_ruta: string;
  incio_viaje?: string;
  fin_viaje?: string;
  isButtonEnabled?: boolean;
  total_records: number;
}
