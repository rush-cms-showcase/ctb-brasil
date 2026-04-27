export interface Service {
  id: string
  title: string
  description: string
  img: string
}

export const services: Service[] = [
  { 
    id: "terraplenagem", 
    title: "Terraplenagem", 
    description: "Serviços de terraplenagem no Vale do Paraíba e Litoral Norte com maquinário próprio. Escavações, aterros, cortes e nivelamento de terrenos desde 1997.", 
    img: "service-10.webp" 
  },
  { 
    id: "aterros", 
    title: "Aterros", 
    description: "Execução de aterros com compactação controlada, garantindo estabilidade e segurança para as fundações e estruturas da sua obra.", 
    img: "service-13.webp" 
  },
  { 
    id: "escavacoes", 
    title: "Escavações", 
    description: "Escavações em diversos tipos de solo e rocha, utilizando equipamentos modernos para movimentação de terra com precisão e segurança.", 
    img: "service-12.webp" 
  },
  { 
    id: "limpeza-de-fossas", 
    title: "Limpeza de Fossas", 
    description: "Serviços especializados de limpeza de fossas e caixas de gordura com caminhão combinado de hidrojato e sucção a vácuo.", 
    img: "service-03.webp" 
  },
  { 
    id: "saneamento", 
    title: "Saneamento", 
    description: "Obras de saneamento básico no Litoral Norte e Vale do Paraíba. Redes de água, esgoto, estações elevatórias e infraestrutura sanitária.", 
    img: "service-08.webp" 
  },
  { 
    id: "drenagem", 
    title: "Drenagem", 
    description: "Projetos de drenagem urbana e rural no Vale do Paraíba. Galerias pluviais, canais, bueiros e sistemas de contenção de cheias.", 
    img: "service-02.webp" 
  },
  { 
    id: "pavimentacoes", 
    title: "Pavimentações", 
    description: "Pavimentação asfáltica e em blocos no Vale do Paraíba. Recapeamento, base, sub-base e sinalização viária com equipe especializada.", 
    img: "service-11.webp" 
  },
  { 
    id: "construcoes", 
    title: "Construções", 
    description: "Execução de obras civis no Vale do Paraíba e Litoral Norte. Edificações, reformas, fundações e estruturas com mão de obra qualificada.", 
    img: "service-01.webp" 
  },
  { 
    id: "demolicoes", 
    title: "Demolições", 
    description: "Demolição controlada de edificações no Vale do Paraíba e Litoral Norte. Segurança, agilidade e destinação correta de resíduos.", 
    img: "service-09.webp" 
  }
]
