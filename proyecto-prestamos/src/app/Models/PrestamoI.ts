import { AbonoI } from "./AbonoI";
import { ClienteI } from "./ClienteI";
import { InteresI } from "./InteresI";

export interface PrestamoI{
  idPrestamo: number,
  idCliente : number,
  idPrestamista : number,
  fechaInicial: string,
  fechaFinal: string,
  porcentaje: number,
  tipoIntereses: string,
  diaCorte : number,
  montoInicial : number,
  montoReal: number,
  fechaPago: string,
  fechaProximoPago: string,
  estado: string,
  oCliente: ClienteI,
  intereses : InteresI[],
  abonos: AbonoI[]
}
