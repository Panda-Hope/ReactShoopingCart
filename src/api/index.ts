// fetch session list

export interface SessionData {
  currency: string,
  currencySymbol: string,
  unit: number,
  sessionLists: {
    id: string,
    productName: string,
    inventory: number,
    price: number,
    cover: string,
    description: string
  }[]
}

export const getSessionLists = async () => {
  return Promise.resolve<SessionData>({
    currency: 'usd',
    currencySymbol: '$',
    unit: 100,
    sessionLists: [
      {
        id: '1',
        productName: 'Starry Night',
        inventory: 4,
        price: 7995,
        cover: 'https://demo.snipcart.com/images/starry-night.jpg',
        description: 'High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.'
      },
      {
        id: '2',
        productName: 'Magazine subscription',
        inventory: 4,
        price: 2000,
        cover: 'https://demo.snipcart.com/images/painting.jpg',
        description: 'Subscribe to our painter\'s magazine. You can opt-in for a weekly or monthly subscription.'
      },
      {
        id: '3',
        productName: 'Rosy-Fingered Dawn at Louse Point',
        inventory: 4,
        price: 4995,
        cover: 'https://demo.snipcart.com/images/rosy.jpg',
        description: 'The title Rosy-Fingered Dawn at Louse Point refers to one of Willem de Kooning\'s favourite places in Long Island.'
      }
    ]
  })
}

export const loginUser = async () => {

}