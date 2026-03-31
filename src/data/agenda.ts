export type AgendaType = 'registration' | 'keynote' | 'panel' | 'qa' | 'break' | 'networking' | 'workshop'

export interface AgendaSlot {
  time: string
  type: AgendaType
  title: string
  speaker?: string
}

export const agenda: AgendaSlot[] = [
  {
    time: '11:30 - 12:00',
    type: 'registration',
    title: 'Opening, registration tea and coffee',
  },
  {
    time: '12:15 - 12:30',
    type: 'keynote',
    title: 'Master of Ceremony & MC intro',
    speaker: 'R0ckstar Dev & Special Guests',
  },
  {
    time: '12:30 - 13:00',
    type: 'keynote',
    title: 'TBD',
  },
  {
    time: '13:00 - 13:30',
    type: 'keynote',
    title: 'TBD',
  },
  {
    time: '13:30 - 14:00',
    type: 'keynote',
    title: 'TBD',
  },
  {
    time: '14:00 - 14:30',
    type: 'break',
    title: 'Coffee Break',
  },
  {
    time: '14:30 - 15:00',
    type: 'qa',
    title: 'Q and A with BTCPay Team',
  },
  {
    time: '15:00',
    type: 'networking',
    title: 'Rockstar leads people to a secret Bar!',
  },
]
