import { product } from '../models/product.model';

export class ProductService {
  private products: product[] = [
    new product(
      'Notebook Samsung Book I5 8gb 256gb Ssd 15 Windows 11 Cinza-chumbo',
      `
O DESEMPENHO QUE SUAS TAREFAS MERECEM!
Com o Samsung Book, você tem o melhor desempenho,
uma arquitetura de última geração e design elegante.
O potencial que suas tarefas merecem, com 8 GB de memória RAM e 256 GB de armazenamento no seu SSD,
 fazendo com que o Samsung Book tenha uma inicialização rápida e grande potência em multitarefas.

Possui uma tela de 15.6 em resolução Full HD, para imagens vívidas e detalhadas, além de contar com tecnologia anti reflexo.
 A moldura de 6,7 mm amplia a área útil e contribui para um design abrangente. Não fique limitado,
 o Samsung Book possui 2 tampas de fácil acesso para upgrade de memória e armazenamento na parte inferior do produto.
`,
      `url"https://th.bing.com/th/id/R.98fc01fea7e762a25fd129a131845190?rik=6MMPaCmIRV9Ovw&pid=ImgRaw&r=0"`,
      ` Tecnologia`,
      2.699
    ),

    new product(
      'Fralda Infantil Confort Sec 12 Horas De Proteção Pampers Gênero Sem gênero Tamanho P',
      `
      PROTEÇÃO E CONFORTO!

      A fralda Pampers Confort Sec possui máxima absorção durante a noite inteira, mantendo o bebê seco por até 12 horas. Com canais de gel, que distribuem o xixi de forma eficiente e evitam que a fralda fique caída. As barreiras antivazamentos se adaptam suavemente ao redor das pernas do bebê, garantindo maior proteção.
      • Até 2X mais seco e arejado em comparação com fraldas comuns.
      • Canais de Ar: Permitem a circulação de ar dentro da fralda, mantendo a pele do bebê arejada e sequinha durante a noite.
      • Gel Mágico que absorve e retém a umidade no interior da fralda para noites mais sequinhas.
      • Camada ultra absorvente: absorve rapidamente a umidade, mantendo a pele do bebê sequinha.
      • Barreiras Anti Vazamento: se adaptam suavemente ao redor das pernas do bebê.
      • Ajuste cômodo e flexível para uma proteção anti vazamentos todas as noites.
      • Loção hipoalergênica: ajuda a prevenir irritações.`,
      `url"https://http2.mlstatic.com/D_NQ_NP_736816-MLU69483578412_052023-O.webp"`,
      ` Casa`,
      42.99
    ),
    new product(
      'Halter Ajustável 24kg Dumbbell Anilha Regulável MusculaçãoFralda Infantil Confort Sec 12 Horas De Proteção Pampers Gênero Sem gênero Tamanho P',
      `
      ATENÇÃO!!!
      LIMITE DE 1 UNIDADE POR COMPRA. SE QUISER COMPRAR MAIS DE 1 UNIDADE, POR FAVOR FAÇA COMPRAS SEPARADAS, POR CONTA DO LIMITE DE PESO DO PACOTE.

      HALTER AJUSTÁVEL ANILHA ACADEMIA MUSCULAÇÃO DUMBELL 24kg

      - Tenha seu equipamento profissional em casa;
      - Super versátil, ajustável para que você consiga treinar vários tipos de movimentos;
      - Com este equipamento você poderá treinar vários grupos musculares. Braços, pernas, costas, bíceps, tríceps, ombro e muito mais;
      - Super Fácil de Utilizar;
      - Você consegue ajustar o peso apenas girando um botão. Produto com qualidade de ponta;
      - Cuide do seu corpo e da sua saúde com um equipamento de qualidade superior;
      - A sua melhor opção para levar os seus treinos para um outro nível, queimar calorias, ganhar e fortalecer seus músculos;

      FICHA TÉCNICA:

      - Ajustável para a sua necessidade (até 24kg);
      - Equipamento de Ótima Qualidade;
      - Produto Enviado dentro de Caixa de Papelão (não acompanha maleta);
      - Material das Barras: A parte interna das barras é feita de metal. Os pegadores, a parte externa é de plástico reforçado;
      - Material das Anilhas: São feitos de Ferro Fundido com Pintura de Alta Qualidade.

      PESO: Os pesos possíveis são: 2,5kg / 3,5kg / 4,5kg / 5,5kg / 6,5kg / 8kg / 9kg / 10kg /
      11,5kg / 13,5kg / 16kg / 18kg / 20,5kg / 22,5kg e 24kg

      ITENS INCLUSOS:

      - 1 Halter Dumbbell Ajustável (2,5kg a 24kg)
      - 1 Base para Apoio do Dumbbell`,
      `url"https://http2.mlstatic.com/D_NQ_NP_628988-MLB72319983120_102023-O.webp"`,
      ` Fitness e Musculação`,
      727.42
    ),

    new product(
      'Kit Relógio Feminino Dumont Dourado Prova Dágua E Semijoia',
      `
      Chegar tarde aos seus compromissos não é mais uma opção, com este relógio de pulso cumpra com todos os horários e não perca nenhum evento importante. Adicione estilo ao seu outfit, é o complemento ideal.`,
      `url"https://http2.mlstatic.com/D_NQ_NP_628988-MLB72319983120_102023-O.webp"`,
      ` Moda`,
      187.88
    )



  ];


getProducts(){
  return this.products.slice();
}

}


