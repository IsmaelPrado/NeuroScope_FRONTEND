export interface Dimension {
  Curiosidad?: number | string;
  Creatividad?: number | string;
  Adaptabilidad?: number | string;
  ExploracionIdeas?: number | string;
  EvadeRutina?: number | string;

  Planificacion?: number | string;
  Puntualidad?: number | string;
  Organizacion?: number | string;
  Compromiso?: number | string;
  EsmeroMetas?: number | string;

  DisfruteSocial?: number | string;
  HablaFacil?: number | string;
  ComodidadSocial?: number | string;
  EnergiaSocial?: number | string;
  PrefiereGrupos?: number | string;

  Empatia?: number | string;
  Altruismo?: number | string;
  EscuchaActiva?: number | string;
  EvitaConflictos?: number | string;
  ComprensionEmocional?: number | string;

  Ansiedad?: number | string;
  Irritabilidad?: number | string;
  ManejoEstres?: number | string;
  PreocupacionExcesiva?: number | string;
  SensibilidadErrores?: number | string;
}


// Si quieres ser más estricto, puedes dividir Dimension en cinco interfaces por cada letra O, C, E, A, N, pero no es obligatorio.

export interface OCEANDatos {
  O: Pick<Dimension, 
    "Curiosidad" | "Creatividad" | "Adaptabilidad" | "ExploracionIdeas" | "EvadeRutina"
  >;
  C: Pick<Dimension,
    "Planificacion" | "Puntualidad" | "Organizacion" | "Compromiso" | "EsmeroMetas"
  >;
  E: Pick<Dimension,
    "DisfruteSocial" | "HablaFacil" | "ComodidadSocial" | "EnergiaSocial" | "PrefiereGrupos"
  >;
  A: Pick<Dimension,
    "Empatia" | "Altruismo" | "EscuchaActiva" | "EvitaConflictos" | "ComprensionEmocional"
  >;
  N: Pick<Dimension,
    "Ansiedad" | "Irritabilidad" | "ManejoEstres" | "PreocupacionExcesiva" | "SensibilidadErrores"
  >;
}

export interface SetResponse {
  mensaje: string;
  total_registros: number;
  registros_enviados: number;
  datos: OCEANDatos[];
}
