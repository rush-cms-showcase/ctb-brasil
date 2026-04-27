export interface Equipment {
  id: string
  name: string
  category: string
  weight: string | null
  description?: string
  image: string | null
}

export const equipments: Equipment[] = [
  {
    id: 'escavadeira-hyundai-150lc9',
    name: 'Escavadeira Hidráulica Hyundai 150LC-9',
    category: 'escavadeiras',
    weight: '15 toneladas',
    image: null
  },
  {
    id: 'escavadeira-hyundai-220lc9',
    name: 'Escavadeira Hidráulica Hyundai 220LC-9',
    category: 'escavadeiras',
    weight: '22 toneladas',
    image: null
  },
  {
    id: 'escavadeira-linkbelt-135dz',
    name: 'Escavadeira Link-Belt 135DZ',
    category: 'escavadeiras',
    weight: '13,5 toneladas',
    image: null
  },
  {
    id: 'escavadeira-yanmar-vio80',
    name: 'Escavadeira Yanmar Vio 80',
    category: 'escavadeiras',
    weight: '8 toneladas',
    image: null
  },
  {
    id: 'mini-escavadeira-yanmar-vio33',
    name: 'Mini Escavadeira Yanmar Vio 33',
    category: 'escavadeiras',
    weight: '3,3 toneladas',
    image: null
  },
  {
    id: 'mini-escavadeira-yanmar-vio17',
    name: 'Mini Escavadeira Yanmar Vio 17',
    category: 'escavadeiras',
    weight: '1,7 toneladas',
    image: null
  },
  {
    id: 'implementos-brocas-rompedores',
    name: 'Implementos - Brocas e Rompedores de Concreto',
    category: 'implementos',
    weight: null,
    image: null
  },
  {
    id: 'mini-carregadeira-new-holland-l218',
    name: 'Mini Carregadeira New Holland L218',
    category: 'carregadeiras',
    weight: null,
    image: null
  },
  {
    id: 'motoniveladora',
    name: 'Motoniveladora',
    category: 'maquinas-pesadas',
    weight: null,
    image: null
  },
  {
    id: 'trator-esteira-d5k',
    name: 'Trator de Esteira D5K',
    category: 'maquinas-pesadas',
    weight: null,
    image: null
  },
  {
    id: 'retro-escavadeira-580n',
    name: 'Retro Escavadeira 580N Series 2',
    category: 'escavadeiras',
    weight: null,
    image: null
  },
  {
    id: 'rolo-compactador-caterpillar-cs423e',
    name: 'Rolo Compactador Caterpillar CS423E',
    category: 'compactadores',
    weight: null,
    description: 'Equivalente ao CA15',
    image: null
  },
  {
    id: 'rolo-compactador-xcmg-120pd',
    name: 'Rolo Compactador XCMG 120PD',
    category: 'compactadores',
    weight: null,
    description: 'Equivalente ao CA25',
    image: null
  },
  {
    id: 'pa-carregadeira-w20e',
    name: 'Pá Carregadeira W20E',
    category: 'carregadeiras',
    weight: null,
    image: null
  },
  {
    id: 'caminhao-basculante-volks-26280',
    name: 'Caminhão Basculante Volks 26280',
    category: 'caminhoes',
    weight: null,
    description: 'Traçado',
    image: null
  },
  {
    id: 'caminhao-basculante-cabine-suplementar',
    name: 'Caminhão Basculante com Cabine Suplementar',
    category: 'caminhoes',
    weight: null,
    image: null
  },
  {
    id: 'caminhoes-caminhonete',
    name: 'Caminhões / Caminhonete com Carroceria',
    category: 'caminhoes',
    weight: null,
    image: null
  },
  {
    id: 'caminhao-munk',
    name: 'Caminhão Munk',
    category: 'caminhoes',
    weight: null,
    image: null
  },
  {
    id: 'caminhao-pipa',
    name: 'Caminhão Pipa',
    category: 'caminhoes',
    weight: null,
    image: null
  },
  {
    id: 'caminhao-prancha',
    name: 'Caminhão Prancha',
    category: 'caminhoes',
    weight: null,
    image: null
  },
  {
    id: 'caminhao-combinado',
    name: 'Caminhão Combinado (Hidrojato e Sucção)',
    category: 'caminhoes',
    weight: null,
    image: null
  },
  {
    id: 'carreta-basculante',
    name: 'Carreta Basculante',
    category: 'caminhoes',
    weight: null,
    image: null
  },
  {
    id: 'carreta-prancha',
    name: 'Carreta Prancha',
    category: 'caminhoes',
    weight: null,
    image: null
  },
  {
    id: 'dumper-ausa-d250mp',
    name: 'Dumper Ausa D250MP',
    category: 'maquinas-pesadas',
    weight: null,
    image: null
  },
  {
    id: 'empilhadeira',
    name: 'Empilhadeira',
    category: 'maquinas-pesadas',
    weight: null,
    image: null
  },
  {
    id: 'britadora-escavadeira',
    name: 'Britadora Escavadeira',
    category: 'maquinas-pesadas',
    weight: null,
    image: null
  },
  {
    id: 'cacambas-entulho',
    name: 'Caçambas de Entulho',
    category: 'outros',
    weight: null,
    image: null
  },
  {
    id: 'geradores-energia',
    name: 'Geradores de Energia',
    category: 'outros',
    weight: null,
    image: null
  },
  {
    id: 'conjunto-rebaixamento-lencol-freatico',
    name: 'Conjunto de Rebaixamento de Lençol Freático',
    category: 'outros',
    weight: null,
    image: null
  },
  {
    id: 'plataforma-elevatoria-jlg-450aj',
    name: 'Plataforma Elevatória JLG 450AJ Diesel',
    category: 'plataformas',
    weight: null,
    description: 'Até 16m de altura',
    image: null
  },
  {
    id: 'plataforma-tesoura-jlg',
    name: 'Plataforma Tesoura JLG Elétrica/Diesel',
    category: 'plataformas',
    weight: null,
    description: 'Até 8m de altura',
    image: null
  },
  {
    id: 'containers',
    name: 'Containers',
    category: 'outros',
    weight: null,
    image: null
  }
]
