import { Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  list = [
    {
      name: 'Astolfo',
      color: 'Caramelo',
      gender: 'Macho',
      city: 'Bauru',
      age: '1 Mes',
      vaccines: 'Em dia',
      pelo: 'Curto',
      castrate: false,
      img: 'https://jornalatual.info/assets/uploads/noticias/sliders/-vira-lata-caramelo-pode-se-tornar-manifestacao-cultural-no-brasil-27042023123702.png',
    },
    {
      name: 'Andre',
      color: 'Caramelo',
      gender: 'Fêmea',
      city: 'Bauru',
      age: '5 Meses',
      vaccines: 'Em dia',
      pelo: 'Curto',
      castrate: true,
      img: 'https://prefeitura.rio/wp-content/uploads/2020/05/adote_cao.jpg',
    },
    {
      name: 'Bea',
      color: 'Preto e branco',
      gender: 'Fêmea',
      city: 'Bauru',
      age: '2 Meses',
      vaccines: 'Em dia',
      pelo: 'Curto',
      castrate: false,
      img: 'https://portalanimal.campinas.sp.gov.br/sites/default/files/styles/adocao_galeria/public/adocao/crop-duplicate-1-for-AnyConv.com__WhatsApp%20Image%202023-07-20%20at%2012.41.08%20%281%29.jpg?h=3a0c34ca&itok=s2ndEz1t',
    },
    {
      name: 'Fénix',
      color: 'Laranja',
      gender: 'Macho',
      city: 'Bauru',
      age: '2 Meses',
      vaccines: 'Em dia',
      pelo: 'Curto',
      castrate: false,
      img: 'https://blog-static.petlove.com.br/wp-content/uploads/2021/08/Gato-laranja-filhote.jpg',
    },
    {
      name: 'Ped',
      color: 'Preto e branco',
      gender: 'Macho',
      city: 'Bauru',
      age: '2 Meses',
      vaccines: 'Em dia',
      pelo: 'Curto',
      castrate: true,
      img: 'https://uploads.metropoles.com/wp-content/uploads/2023/12/25145856/Foto-animais-para-adocao-zoonose-df-3.jpg',
    },
    {
      name: 'Sem nome',
      color: 'Rejado',
      gender: 'Macho',
      city: 'Bauru',
      age: '4 Semanas',
      vaccines: 'Em dia',
      pelo: 'Curto',
      castrate: false,
      img: 'https://www.petz.com.br/blog//wp-content/uploads/2017/07/gato02.jpg',
    },
    {
      name: 'Garfield',
      color: 'Branco e laranja',
      gender: 'Macho',
      city: 'Bauru',
      age: '5 Semanas',
      vaccines: 'Em dia',
      pelo: 'Curto',
      castrate: false,
      img: 'https://maringapost.com.br/sala3/wp-content/uploads/sites/12/2020/10/WhatsApp-Image-2020-10-27-at-12.07.15.jpeg',
    },
    {
      name: 'Marrie',
      color: 'Branco',
      gender: 'Fêmea',
      city: 'Bauru',
      age: '2 Meses',
      vaccines: 'Em dia',
      pelo: 'Curto',
      castrate: false,
      img: 'https://i.pinimg.com/736x/9f/d3/72/9fd372fdf29c9998483cade81dbbcbb0.jpg',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(obj: any): void {
    this.dialog.open(DetailsComponent, {
      width: '40%',
      height: 'auto',
      data: { obj: obj },
    });
  }
}
