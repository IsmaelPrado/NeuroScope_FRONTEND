export interface Dimension {
  Curiosidad?: number;
  Creatividad?: number;
  Adaptabilidad?: number;
  ExploracionIdeas?: number;
  EvadeRutina?: number;

  Planificacion?: number;
  Puntualidad?: number;
  Organizacion?: number;
  Compromiso?: number;
  EsmeroMetas?: number;

  DisfruteSocial?: number;
  HablaFacil?: number;
  ComodidadSocial?: number;
  EnergiaSocial?: number;
  PrefiereGrupos?: number;

  Empatia?: number;
  Altruismo?: number;
  EscuchaActiva?: number;
  EvitaConflictos?: number;
  ComprensionEmocional?: number;

  Ansiedad?: number;
  Irritabilidad?: number;
  ManejoEstres?: number;
  PreocupacionExcesiva?: number;
  SensibilidadErrores?: number;
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
