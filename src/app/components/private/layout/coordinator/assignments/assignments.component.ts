import { Component } from '@angular/core';
import { HistoryTable } from '../../../../../models/admin/admin.interface';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css',
})
export class AssignmentsComponent {
  handleModalEdit: boolean = false;
  handleModalDetail: boolean = false;
  handleToast: boolean = false;
  action: string = '';
  data: HistoryTable[] = [
    {
      id_servicio: 1707853,
      date: '2024-12-09',
      hour_start: '14:10:00',
      hour_end: '',
      license_plate_number: 'WFD129',
      product_code: 'P100923000,T340019710,T340019709,P100622000',
      product_name: 'BUCARAMANGA URBANO SIMPLE',
      adress_start:
        'CLL 1A # 26A - 25 BRR REGADEROS NORTE CERCA A ESCUELA SANTANDER SEDE D',
      adress_end: 'CALLE 48 NO. 26-13 REHABILIDEMOS BUCARAMANGA',
      city: 'BUCARAMANGA',
      name_driver: 'TRIANA MEZA SERGIO ANDRES',
      type_car: 'CAMIONETA',
      name_applicant: 'CHAPARRO MANTILLA JOHN ARLEY',
      type_document: 'CC',
      requirements: '',
      total_records: 2646,
    },
    {
      id_servicio: 1707854,
      date: '2024-12-09',
      hour_start: '17:20:00',
      hour_end: '',
      license_plate_number: 'JTY267',
      product_code: 'P100923000,T340019710,T340019709,P100622000',
      product_name: 'BUCARAMANGA URBANO SIMPLE',
      adress_start: 'CALLE 48 NO. 26-13 REHABILIDEMOS BUCARAMANGA',
      adress_end:
        'CLL 1A # 26A - 25 BRR REGADEROS NORTE CERCA A ESCUELA SANTANDER SEDE D',
      city: 'BUCARAMANGA',
      name_driver: 'VASQUEZ RUEDA JORGE OSWALDO',
      type_car: '',
      name_applicant: 'CHAPARRO MANTILLA JOHN ARLEY',
      type_document: 'CC',
      requirements: '',
      total_records: 2646,
    },
    {
      id_servicio: 1734639,
      date: '2024-12-09',
      hour_start: '13:10:00',
      hour_end: '',
      license_plate_number: 'WEO816',
      product_code: 'P100923000,T340019710,T340019709,P100622000',
      product_name: 'BOGOTA URBANO MAYOR A 16KM SIMPLE',
      adress_start: 'CARRERA 45 A N 75 13 SUR BARRIO JERUSALEN',
      adress_end: 'CLINICA LOS NOGALES SAS CL 95 23 62',
      city: 'BOGOTA',
      name_driver: 'ORTEGA NIETO LAUDELINO',
      type_car: '',
      name_applicant: 'CORRECHA ARGENIS',
      type_document: 'CC',
      requirements: 'XX',
      total_records: 2646,
    },
    {
      id_servicio: 1734640,
      date: '2024-12-09',
      hour_start: '16:05:00',
      hour_end: '',
      license_plate_number: 'WEO816',
      product_code: 'P100923000,T340019710,T340019709,P100622000',
      product_name: 'BOGOTA URBANO MAYOR A 16KM SIMPLE',
      adress_start: 'CLINICA LOS NOGALES SAS CL 95 23 62',
      adress_end: 'CARRERA 45 A N 75 13 SUR BARRIO JERUSALEN',
      city: 'BOGOTA',
      name_driver: 'ORTEGA NIETO LAUDELINO',
      type_car: '',
      name_applicant: 'CORRECHA ARGENIS',
      type_document: 'CC',
      requirements: 'XX',
      total_records: 2646,
    },
    {
      id_servicio: 1735382,
      date: '2024-12-09',
      hour_start: '14:50:00',
      hour_end: '',
      license_plate_number: 'NIN502',
      product_code: 'P100624000,T340017300,T340017400,P100625000',
      product_name: 'BARRANQUILLA MUNICIPIOS DE 16KM A MENOS DE 30KM SIMPLE',
      adress_start: 'SOLEDAD TV 1C SUR #77 - 39 BRR VILLA SELENE',
      adress_end: 'FRESENIUS CRA 51 # 82-197 BARRANQUILLA',
      city: 'BARRANQUILLA',
      name_driver: 'ORTIZ HURTADO RAFAEL ANDRES',
      type_car: 'CAMIONETA',
      name_applicant: 'RIQUETT DE BLANCO ESMILDA',
      type_document: 'CC',
      requirements: '',
      total_records: 2646,
    },
    {
      id_servicio: 1735383,
      date: '2024-12-09',
      hour_start: '20:50:00',
      hour_end: '',
      license_plate_number: 'LGV129',
      product_code: 'P100624000,T340017300,T340017400,P100625000',
      product_name: 'BARRANQUILLA MUNICIPIOS DE 16KM A MENOS DE 30KM SIMPLE',
      adress_start: 'FRESENIUS CRA 51 # 82-197 BARRANQUILLA',
      adress_end: 'SOLEDAD TV 1C SUR #77 - 39 BRR VILLA SELENE',
      city: 'BARRANQUILLA',
      name_driver: 'VARGAS VERGARA JEFFERSON JOSE',
      type_car: 'CAMIONETA',
      name_applicant: 'RIQUETT DE BLANCO ESMILDA',
      type_document: 'CC',
      requirements: '',
      total_records: 2646,
    },
    {
      id_servicio: 1735406,
      date: '2024-12-09',
      hour_start: '09:40:00',
      hour_end: '',
      license_plate_number: 'WNQ478',
      product_code: 'P100923000,T340019710,T340019709,P100622000',
      product_name: 'BARRANQUILLA URBANO SIMPLE',
      adress_start: 'CRA 4 #19-17 BRR SIMON BOLIVAR',
      adress_end: 'FRESENIUS CALLE 70 B N\u00ba 38 ? 152 ? BARRANQUILLA',
      city: 'BARRANQUILLA',
      name_driver: 'PAJARO VASQUEZ VICTOR',
      type_car: 'CAMIONETA',
      name_applicant: 'VILLAMIL MERCADO EDGARDO MIGUEL',
      type_document: 'CC',
      requirements: '',
      total_records: 2646,
    },
    {
      id_servicio: 1735407,
      date: '2024-12-09',
      hour_start: '15:50:00',
      hour_end: '',
      license_plate_number: 'WGX076',
      product_code: 'P100923000,T340019710,T340019709,P100622000',
      product_name: 'BARRANQUILLA URBANO SIMPLE',
      adress_start: 'FRESENIUS CALLE 70 B N\u00ba 38 ? 152 ? BARRANQUILLA',
      adress_end: 'CRA 4 #19-17 BRR SIMON BOLIVAR',
      city: 'BARRANQUILLA',
      name_driver: 'NAJERA POLO OSCAR GUILLERMO',
      type_car: 'AUTOMOVIL',
      name_applicant: 'VILLAMIL MERCADO EDGARDO MIGUEL',
      type_document: 'CC',
      requirements: '',
      total_records: 2646,
    },
    {
      id_servicio: 1735418,
      date: '2024-12-09',
      hour_start: '09:20:00',
      hour_end: '',
      license_plate_number: 'LGU835',
      product_code: 'P100624000,T340017300,T340017400,P100625000',
      product_name: 'BARRANQUILLA MUNICIPIOS MENOS DE 16KM SIMPLE',
      adress_start: 'CR 1B #11D -16 BRR EL CARMEN',
      adress_end:
        'DAVITA CALLE 47 # 6-60-HOSPITAL ADELITA DE CHAR, VILLA ADELA -SOLEDAD,',
      city: 'BARRANQUILLA',
      name_driver: 'DE ALBA ESCORCIA JONH FELIX',
      type_car: 'CAMIONETA',
      name_applicant: 'SIERRA MU\u00d1OZ LUIS ANGEL',
      type_document: 'CC',
      requirements: 'BARRIO EL CRMEN DE MALAMBO',
      total_records: 2646,
    },
    {
      id_servicio: 1735419,
      date: '2024-12-09',
      hour_start: '14:50:00',
      hour_end: '',
      license_plate_number: 'WGX098',
      product_code: 'P100624000,T340017300,T340017400,P100625000',
      product_name: 'BARRANQUILLA MUNICIPIOS MENOS DE 16KM SIMPLE',
      adress_start:
        'DAVITA CALLE 47 # 6-60-HOSPITAL ADELITA DE CHAR, VILLA ADELA -SOLEDAD,',
      adress_end: 'CR 1B #11D -16 BRR EL CARMEN- MALAMBO',
      city: 'BARRANQUILLA',
      name_driver: 'PALLARES DE LA CRUZ VIRGILIO DE JESUS',
      type_car: 'CAMIONETA',
      name_applicant: 'SIERRA MU\u00d1OZ LUIS ANGEL',
      type_document: 'CC',
      requirements: '',
      total_records: 2646,
    },
  ];

  editDriverAssign() {
    this.handleModalEdit = true;
  }
  closeModalEdit(event: boolean) {
    this.handleModalEdit = !event;
  }
  editToastHandle(event: boolean) {
    this.handleToast = event;
    this.action = 'reassignment';
    setTimeout(() => {
      this.handleToast = false;
    }, 3000);
  }
  openDialogDetail() {
    this.handleModalDetail = true;
  }

  closeModalCancel(event: boolean) {
    this.handleModalDetail = !event;
  }
}
