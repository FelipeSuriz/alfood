import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

const ListaRestaurantes = () => {

  const restaurantes: IRestaurante[] = [
    {
      id: 1,
      nome: "Lyllys Cafe",
      pratos: [
        {
          id: 1,
          descricao: 'Lasanha à Bolonhesa',
          imagem: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/16f8aff19e2a7db960e01ccab3901bfe.jpg?itok=bKTLCjv4',
          nome: 'Lasanha',
          restaurante: 1,
          tag: 'Italiana'
        },
        {
          id: 2,
          descricao: 'Strogonoff de Frango à brasileira',
          imagem: 'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2022/08/03/1769155807-receita-de-strogonoff-de-carne-ou-frango-02.jpeg',
          nome: 'Strogonoff',
          restaurante: 1,
          tag: 'Russa'
        },
        {
          id: 3,
          descricao: 'Empadão de Frango',
          imagem: 'https://www.clubedereceitas.com.br/wp-content/uploads/2023/06/receita-empadao-de-frango-cremoso.jpg',
          nome: 'Empadão de Frango',
          restaurante: 1,
          tag: 'Portuguesa'
        }
      ]
    },
    {
      id: 2,
      nome: "Sugiro Sushi",
      pratos: [
        {
          id: 1,
          descricao: 'Combinado de 8 peças',
          imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
          nome: 'Sushi',
          restaurante: 1,
          tag: 'Japonesa'
        },
        {
          id: 2,
          descricao: 'Sashimi de Salmão',
          imagem: 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2009/04/sashimi_facil.jpg',
          nome: 'Sashimi',
          restaurante: 1,
          tag: 'Japonesa'
        }
      ]
    },
    {
      id: 3,
      nome: "Cantina da Escola",
      pratos: [
        {
          id: 1,
          descricao: 'Salgado de queijo com presunto',
          imagem: 'https://centraldossalgados.com.br/wp-content/uploads/2022/11/salgado-queijo-com-presunto.jpg',
          nome: 'Quejunto',
          restaurante: 1,
          tag: 'Lanche'
        },
        {
          id: 2,
          descricao: 'Coxinha de Frango',
          imagem: 'https://t1.rg.ltmcdn.com/pt/posts/1/9/1/coxinha_simples_191_600.jpg',
          nome: 'Coxinha',
          restaurante: 1,
          tag: 'Lanche'
        },
        {
          id: 3,
          descricao: 'Risole de Palmito',
          imagem: 'https://togocongelados.com.br/wp-content/uploads/2022/10/119969341_2093651397445383_1060893899549623074_n-e1665673653157.jpg',
          nome: 'Risole',
          restaurante: 1,
          tag: 'Lanche'
        }
      ]
    }
  ]

  return (<section className={style.ListaRestaurantes}>
    <h1>Os restaurantes mais <em>bacanas</em>!</h1>
    {restaurantes?.map(item => <Restaurante restaurante={item} key={item.id} />)}
  </section>)
}

export default ListaRestaurantes