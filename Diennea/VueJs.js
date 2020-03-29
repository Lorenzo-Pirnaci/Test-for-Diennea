var generale = new Vue({

  el: '#generale',

  data: {
    Columns: ['titolo', 'regista', 'anno'],
    filmData: [
      {titolo: 'The Departed', regista: 'Martin Scorsese', anno: 2006, image: 'Images/TheDeparted.jpg', alt: 'Locandina di "The Departed"' },
      {titolo: 'The Wolf of Wall Street', regista: 'Martin Scorsese', anno: 2014, image: 'Images/TheWolfofWallStreet.jpg', alt: 'Locandina di "The Wolf of Wall Street"' },
      {titolo: 'Interstellar', regista: 'Christopher Nolan', anno: 2014, image: 'Images/Interstellar.jpg', alt: 'Locandina di "Interstellar"' },
      {titolo: 'Il Diavolo veste Prada', regista: 'David Frankel', anno: 2006, image: 'Images/IlDiavolo.jpg', alt: 'Locandina di "Il Diavolo veste Prada"' },
      {titolo: 'Avatar', regista: 'James Cameron', anno: 2010, image: 'Images/Avatar.jpg', alt: 'Locandina di "Avatar"' },
      {titolo: 'Io sono Leggenda', regista: 'Francis Lawrence', anno: 2008, image: 'Images/Leggenda.jpg', alt: 'Locandina di "Io sono Leggenda"' },
      {titolo: 'Benvenuto Presidente', regista: 'Riccardo Milani', anno: 2013, image: 'Images/BenvenutoPresidente.jpg', alt: 'Locandina di "Benvenuto Presidente"' },
      {titolo: 'Joker', regista: 'Todd Phillips', anno: 2019, image: 'Images/Joker.jpg', alt: 'Locandina di "Joker"' },
      {titolo: 'Delivery Man', regista: 'Ken Scott', anno: 2014, image: 'Images/DeliveryMan.jpg', alt: 'Locandina di "Delivery Man"' },
      {titolo: 'Sopravvivere coi Lupi', regista: 'Véra Belmont', anno: 2007, image: 'Images/Lupi.jpg', alt: 'Locandina di "Sopravvivere coi Lupi"' },
      {titolo: 'Instinct - Istinto Primordiale', regista: 'Jon Turteltaub', anno: 1999, image: 'Images/Instinct.jpg', alt: 'Locandina di "Instinct"' }
    ],
    isLoading: true
  },

  methods: {
    changeDisplay() {
      this.isLoading = !this.isLoading;
    }
  }

});
