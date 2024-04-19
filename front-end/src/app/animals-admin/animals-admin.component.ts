import { Component } from '@angular/core';

@Component({
  selector: 'app-animals-admin',
  templateUrl: './animals-admin.component.html',
  styleUrls: ['./animals-admin.component.css'],
})
export class AnimalsAdminComponent {
  datatable = [
    {
      id: 0,
      status: 1,
      name: 'Astolfo',
      color: 'Caramelo',
      gender: 'Macho',
      city: 'Bauru',
      age: '1 Mes',
      castrate: false,
      img: 'https://jornalatual.info/assets/uploads/noticias/sliders/-vira-lata-caramelo-pode-se-tornar-manifestacao-cultural-no-brasil-27042023123702.png',
    },
    {
      id: 1,

      status: 1,
      name: 'Andre',
      color: 'Caramelo',
      gender: 'Fêmea',
      city: 'Bauru',
      age: '5 Meses',
      castrate: true,
      img: 'https://prefeitura.rio/wp-content/uploads/2020/05/adote_cao.jpg',
    },
    {
      id: 2,
      status: 1,
      name: 'Bea',
      color: 'Preto e branco',
      gender: 'Fêmea',
      city: 'Bauru',
      age: '2 Meses',
      castrate: false,
      img: 'https://portalanimal.campinas.sp.gov.br/sites/default/files/styles/adocao_galeria/public/adocao/crop-duplicate-1-for-AnyConv.com__WhatsApp%20Image%202023-07-20%20at%2012.41.08%20%281%29.jpg?h=3a0c34ca&itok=s2ndEz1t',
    },
    {
      id: 3,
      status: 1,
      name: 'Fénix',
      color: 'Laranja',
      gender: 'Macho',
      city: 'Bauru',
      age: '2 Meses',
      castrate: false,
      img: 'https://blog-static.petlove.com.br/wp-content/uploads/2021/08/Gato-laranja-filhote.jpg',
    },
    {
      id: 4,

      status: 1,
      name: 'Ped',
      color: 'Preto e branco',
      gender: 'Macho',
      city: 'Bauru',
      age: '2 Meses',
      castrate: true,
      img: 'https://uploads.metropoles.com/wp-content/uploads/2023/12/25145856/Foto-animais-para-adocao-zoonose-df-3.jpg',
    },
    {
      id: 5,
      status: 1,
      name: 'Sem nome',
      color: 'Rejado',
      gender: 'Macho',
      city: 'Bauru',
      age: '4 Semanas',
      castrate: false,
      img: 'https://www.petz.com.br/blog//wp-content/uploads/2017/07/gato02.jpg',
    },
    {
      id: 6,
      status: 1,
      name: 'Garfield',
      color: 'Branco e laranja',
      gender: 'Macho',
      city: 'Bauru',
      age: '5 Semanas',
      castrate: false,
      img: 'https://maringapost.com.br/sala3/wp-content/uploads/sites/12/2020/10/WhatsApp-Image-2020-10-27-at-12.07.15.jpeg',
    },
    {
      id: 7,
      status: 1,
      name: 'Marrie',
      color: 'Branco',
      gender: 'Fêmea',
      city: 'Bauru',
      age: '2 Meses',
      castrate: false,
      img: 'https://i.pinimg.com/736x/9f/d3/72/9fd372fdf29c9998483cade81dbbcbb0.jpg',
    },
    {
      id: 8,

      status: 0,
      name: 'Carlos',
      color: 'Branco',
      gender: 'Macho',
      city: 'Bauru',
      age: '7 Meses',
      castrate: true,
      img: 'https://i.pinimg.com/736x/9f/d3/72/9fd372fdf29c9998483cade81dbbcbb0.jpg',
    },
  ];
}