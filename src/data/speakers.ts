export interface Speaker {
  name: string
  title: string
  photo?: string
  xHandle?: string
  website?: string
}

export const speakers: Speaker[] = [
  { name: 'DSTRUKT',                  title: 'Designer & Developer',             photo: '/images/speakers/dstrukt__.jpg',     xHandle: 'dstrukt__'      },
  { name: 'Kukks',                    title: 'Core Contributor',                 photo: '/images/speakers/MrKukks.jpg',       xHandle: 'MrKukks'        },
  { name: 'ndeet',                    title: 'Ecommerce Integrations Developer', photo: '/images/speakers/ndeet.jpg',         xHandle: 'ndeet'          },
  { name: 'Nicolas Dorier',           title: 'Founder & Lead Developer',         photo: '/images/speakers/NicolasDorier.jpg', xHandle: 'NicolasDorier'  },
  { name: 'Pavlenex',                 title: 'Project Manager',                  photo: '/images/speakers/pavlenex.jpg',      xHandle: 'pavlenex'       },
  { name: 'thgO.O',                   title: 'Full-Stack Developer',             photo: '/images/speakers/thgO_O.jpg',        xHandle: 'thgO_O'         },
  { name: 'Tobses',                   title: 'Full-Time Contributor',            photo: '/images/speakers/TChileta.jpg',      xHandle: 'TChileta'       },
  { name: 'Uncle Rockstar Developer', title: 'Core Contributor',                 photo: '/images/speakers/r0ckstardev.jpg',   xHandle: 'r0ckstardev'    },
  { name: 'webworthy',                title: 'Contributor',                      photo: '/images/speakers/WebWorthy.jpg',     xHandle: 'WebWorthy'      },
  { name: 'TBD',                      title: 'Speaker',                          photo: undefined,                            xHandle: undefined        },
]
