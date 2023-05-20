import { defineStore } from 'pinia'
import { useRouter } from "vue-router";

export const useCounterStore = defineStore('counter',{
  state: () => ({
     router: useRouter(),
     catsArray: [
      {
          "ID": "Padre",
          "CatsName": "Падре",
          "sex": "кіт",
          "age": "5 років",
          "chip": "немає",
          "info": "Падре старший. Він дорослий і розумний. Падре живе в підвалі, до якого взимку 2022 чогось бігали люди. Прибігли такі вночі, їсти не дали, щось теревеніли.Чого без паштету приходити, неясно.",
          "images": ['/all-cats/padre-main.png', '/all-cats/padre-1.png','/all-cats/padre-2.png','/all-cats/padre-3.png']
      },
      {
        "ID": "Cherchill",
        "CatsName": "Черчіль",
        "sex": "кішка",
        "age": "8 років",
        "chip": "немає",
        "info": "lorem",
        "images": ['/all-cats/cherchil-main.png', '/all-cats/cherchil-1.png','/all-cats/cherchil-2.png','/all-cats/cherchil-3.png']
    },
    {
      "ID": "Kostik",
      "CatsName": "Костик",
      "sex": "кіт",
      "age": "8 років",
      "chip": "немає",
      "info": "lorem",
      "images": ['/all-cats/kostik-main.png', '/all-cats/kostik-1.png','/all-cats/kostik-2.png','/all-cats/kostik-3.png']
  },
  {
    "ID": "Medvid",
    "CatsName": "Медвідь",
    "sex": "кішка",
    "age": "8 років",
    "chip": "немає",
    "info": "lorem",
    "images": ['/all-cats/medvid-main.png', '/all-cats/medvid-1.png','/all-cats/medvid-2.png','/all-cats/medvid-3.png']
},
{
  "ID": "Semen",
  "CatsName": "Семен Прибіжабль",
  "sex": "кіт",
  "age": "3 роки",
  "chip": "чіпований",
  "info": "lorem",
  "images": ['/all-cats/semen-main.png', '/all-cats/semen-1.png','/all-cats/semen-2.png','/all-cats/semen-3.png']
},
{
  "ID": "Zoja",
  "CatsName": "Зоя",
  "sex": "кішка",
  "age": "2 роки",
  "chip": "немає",
  "info": "lorem",
  "images": ['/all-cats/zoja-main.png', '/all-cats/zoja-1.png','/all-cats/zoja-2.png','/all-cats/zoja-3.png']
},
{
  "ID": "Boris",
  "CatsName": "Борис",
  "sex": "кіт",
  "age": "2 роки",
  "chip": "немає",
  "info": "lorem",
  "images": ['/all-cats/boris-main.png', '/all-cats/boris-1.png','/all-cats/boris-2.png','/all-cats/boris-3.png']
},
{
  "ID": "Bajraktar",
  "CatsName": "Байрактар",
  "sex": "кіт",
  "age": "2 роки",
  "chip": "немає",
  "info": "lorem",
  "images": ['/all-cats/bajraktar-main.png', '/all-cats/bajraktar-1.png','/all-cats/bajraktar-2.png','/all-cats/bajraktar-3.png']
},
{
  "ID": "Tim",
  "CatsName": "Тимофій Байрактарович",
  "sex": "кіт",
  "age": "6 місяців",
  "chip": "немає",
  "info": "lorem",
  "images": ['/all-cats/tim-main.png', '/all-cats/tim-1.png','/all-cats/tim-2.png','/all-cats/tim-3.png']
},
{
  "ID": "Snigok",
  "CatsName": "Сніжок",
  "sex": "кіт",
  "age": "5 років",
  "chip": "немає",
  "info": "lorem",
  "images": ['/all-cats/snigok-main.png', '/all-cats/snigok-1.png','/all-cats/snigok-2.png','/all-cats/snigok-3.png']
},
{
  "ID": "Bomba",
  "CatsName": "Бомба безхвоста",
  "sex": "кішка",
  "age": "5 роки",
  "chip": "немає",
  "info": "lorem",
  "images": ['/all-cats/bomba-main.png', '/all-cats/bomba-1.png','/all-cats/bomba-2.png','/all-cats/bomba-3.png']
},
{
  "ID": "Musia",
  "CatsName": "Муся",
  "sex": "кішка",
  "age": "7 років",
  "chip": "немає",
  "info": "lorem",
  "images": ['/all-cats/musia-main.png', '/all-cats/musia-1.png','/all-cats/musia-2.png','/all-cats/musia-3.png']
},
{
  "ID": "Shtepa",
  "CatsName": "Штепа",
  "sex": "кішка",
  "age": "5 років",
  "chip": "немає",
  "info": "lorem",
  "images": ['/all-cats/shtepa-main.png', '/all-cats/shtepa-1.png','/all-cats/shtepa-2.png','/all-cats/shtepa-3.png']
},
{
  "ID": "Muhomor",
  "CatsName": "Мухомор",
  "sex": "кіт",
  "age": "5 роки",
  "chip": "немає",
  "info": "lorem",
  "images": ['/all-cats/muhomor-main.png', '/all-cats/muhomor-1.png','/all-cats/muhomor-2.png','/all-cats/muhomor-3.png']
},
{
  "ID": "Shpundel",
  "CatsName": "Шпундель",
  "sex": "кішка",
  "age": "2 роки",
  "chip": "немає",
  "info": "lorem",
  "images": ['/all-cats/shpundel-main.png', '/all-cats/shpundel-1.png','/all-cats/shpundel-2.png','/all-cats/shpundel-3.png']
},
     ],
    }),
    actions: {
      goToCatCard(itemid){
        this.router.push({ name: "OneCat", params: { id: itemid } });
      },
    }
})
