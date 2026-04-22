export interface Speaker {
  name: string
  title: string
  photo?: string
  xHandle?: string
  website?: string
}

export const speakers: Speaker[] = [
  { name: 'Giacomo Zucco',            title: 'President, Plan B Network',        photo: '/images/speakers/giacomozucco.jpg', xHandle: 'giacomozucco'   },
  { name: 'Mir Zucco',                title: 'Cypher Tank, Host A Block with Mir', photo: '/images/speakers/mir_btc.jpg', xHandle: 'mir_btc'        },
  { name: 'DSTRUKT',                  title: 'Product Designer',                 photo: '/images/speakers/dstrukt__.jpg',     xHandle: 'dstrukt__'      },
  { name: 'Kukks',                    title: 'Maintainer',                       photo: '/images/speakers/MrKukks.jpg',       xHandle: 'MrKukks'        },
  { name: 'ndeet',                    title: 'Ecommerce Integrations Developer', photo: '/images/speakers/ndeet.jpg',         xHandle: 'ndeet'          },
  { name: 'Nicolas Dorier',           title: 'Founder & Lead Developer',         photo: '/images/speakers/NicolasDorier.jpg', xHandle: 'NicolasDorier'  },
  { name: 'Pavlenex',                 title: 'Product Manager',                  photo: '/images/speakers/pavlenex.jpg',      xHandle: 'pavlenex'       },
  { name: 'thgO.O',                   title: 'Core Contributor',                 photo: '/images/speakers/thgO_O.jpg',        xHandle: 'thgO_O'         },
  { name: 'Tobses',                   title: 'Core Contributor',                 photo: '/images/speakers/TChileta.jpg',      xHandle: 'TChileta'       },
  { name: 'Uncle Rockstar Developer', title: 'Maintainer',                       photo: '/images/speakers/r0ckstardev.jpg',   xHandle: 'r0ckstardev'    },
  { name: 'webworthy',                title: 'Video & Marketing',                photo: '/images/speakers/WebWorthy.jpg',     xHandle: 'WebWorthy'      },
  // Add more speakers: { name, title, photo: '/images/speakers/handle.jpg', xHandle }
]
