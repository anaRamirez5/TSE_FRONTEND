export interface HistoryTable {
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
  tipov_funcionario: string;
  nom_funcionario: string;
  tipdocu_funcionario: string;
  ape_conductor: string;
  docu_funcionario?: string;
  telefono_funcionario?: string;
  type_car: string;
  name_applicant: string;
  type_document: string;
  estado_servicio: string;
  requerimiento: string;
  total_records: number;
  ruta: string;
  sector_ruta: string;
}
