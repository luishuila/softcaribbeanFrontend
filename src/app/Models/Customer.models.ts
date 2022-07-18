export class CustomerModels {
  id:number|undefined;
  nmcliente: number;
  nombres: string;
  apellidos: string;
  dsdireccion: string;
  dscorreo: string;
  telefono: string;
  cdtelefonoalter: string;
  cdcelular: string;
  idcargo: number;
  cargo: string;
  idciudad: number;
  ciudad: string;
  fenacimiento: Date;
  genero: string;
  idcomunidad: number;
  comunidad: string;
  empresalabora: string;
  iddivision: number;
  cus_dsdivision: string;
  idpais: number;
  pais: string;
  hobbies: string
  constructor(

    nmcliente: number,
    nombres: string,
    apellidos: string,
    dsdireccion: string,
    dscorreo: string,
    telefono: string,
    cdtelefonoalter: string,
    cdcelular: string,
    idcargo: number,
    cargo: string,
    idciudad: number,
    ciudad: string,
    fenacimiento: Date,
    genero: string,
    idcomunidad: number,
    comunidad: string,
    empresalabora: string,
    iddivision: number,
    cus_dsdivision: string,
    idpais: number,
    pais: string,
    hobbies: string,
    id?:number,
  ) {
    this.id = id;
    this.nmcliente = nmcliente;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.dsdireccion = dsdireccion;
    this.dscorreo = dscorreo;
    this.telefono = telefono;
    this.cdtelefonoalter = cdtelefonoalter;
    this.cdcelular = cdcelular;
    this.idcargo = idcargo;
    this.cargo = cargo;
    this.idciudad = idciudad;
    this.ciudad = ciudad;
    this.fenacimiento = fenacimiento;
    this.genero = genero;
    this.idcomunidad = idcomunidad;
    this.comunidad = comunidad;
    this.empresalabora = empresalabora;
    this.iddivision = iddivision;
    this.cus_dsdivision = cus_dsdivision;
    this.idpais = idpais;
    this.pais = pais;
    this.hobbies = hobbies;
  }
}
