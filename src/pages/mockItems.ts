interface Item {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    points: number;
  }
  
  const mockItems: Item[] = [
    {
      id: 1,
      title: 'Livre - Le Seigneur des anneaux',
      description: 'Le célèbre roman de J.R.R. Tolkien',
      imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71ADh-KokpL.jpg',
      points: 50
    },
    {
      id: 2,
      title: 'Livre - Harry Potter et la chambre des secrets',
      description: 'Deuxième tome de la saga Harry Potter',
      imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91cX-rB4dPL.jpg',
      points: 40
    },
    {
      id: 3,
      title: 'Tondeuse à gazon',
      description: 'Tondeuse à gazon électrique avec câble de 30 mètres',
      imageUrl: 'https://breizh-motoculture.bzh/475-large_default/rm-650-ve-tondeuse-a-gazon-thermique-tractee.jpg',
      points: 100
    },
    {
      id: 4,
      title: 'Machine à café',
      description: 'Machine à café Nespresso avec support pour capsules',
      imageUrl: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/8134Lx+OduL._AC_SL1500_.jpg',
      points: 70
    },
    {
      id: 5,
      title: 'Trottinette électrique',
      description: 'Trottinette électrique pliable avec frein à disque',
      imageUrl: 'https://pic.clubic.com/v1/images/1987935/raw?fit=smartCrop&width=550&height=550&hash=2a2a1af6332a61feb93c30e154f4f361f79f90f4',
      points: 150
    },
    {
      id: 6,
      title: 'Cuisinière',
      description: 'Cuisinière à gaz 4 feux avec four électrique',
      imageUrl: 'https://www.poelegodin.com/171/cuisiniere-godin-ligne-retro-1400-998414b.jpg',
      points: 200
    }
  ];
  
  export default mockItems;
  