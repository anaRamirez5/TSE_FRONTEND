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
  name_conductor: string;
  ape_conductor: string;
  estado_servicio: string;
  requerimiento: string;
  tipov_funcionario: string;
  nom_funcionario: string;
  tipdocu_funcionario: string;
  docu_funcionario?: string;
  telefono_funcionario?: string;
  ruta?: string;
  ruta_detalle: string;
  inicio_viaje?: string;
  fin_viaje?: string;
  total_records: number;
  isButtonEnabled?: boolean;
}

export interface stadistic {
  servicios_rechazados: number;
  servicios_aceptados: number;
  servicios_finalizados: number;
}
