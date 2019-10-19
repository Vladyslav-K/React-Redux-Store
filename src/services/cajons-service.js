import cajon1 from '../img/cajon1.jpg'
import cajon2 from '../img/cajon2.jpg'
export default class CajonsService {

  data = [
    {
      id: 1,
      title: '"Царский"',
      model: 'Кахон из красного дерева',
      price: 1000,
      coverImage: cajon2
    },
    {
      id: 2,
      title: '"Антикризисный"',
      model: 'Кахон из табуретки',
      price: 500,
      coverImage: cajon1
    },
    {
      id: 3,
      title: '"Антикризисный"',
      model: 'Кахон из табуретки',
      price: 500,
      coverImage: cajon1
    },
    {
      id: 4,
      title: '"Антикризисный"',
      model: 'Кахон из табуретки',
      price: 500,
      coverImage: cajon1
    },
    {
      id: 5,
      title: '"Антикризисный"',
      model: 'Кахон из табуретки',
      price: 500,
      coverImage: cajon1
    },
  ];

  getCajons() {
    return new Promise((resolve, reject) => {
      resolve(this.data)
      reject(new Error('Something bad happened'))
    });
  };
};