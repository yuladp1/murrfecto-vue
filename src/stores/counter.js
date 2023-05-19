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
          "images": ['/all-cats/padre-main.png', '../src/assets/all-cats/padre-1.png','../src/assets/all-cats/padre-2.png','../src/assets/all-cats/padre-3.png']
      },
      {
        "ID": "Padre",
        "CatsName": "Падре",
        "sex": "кіт",
        "age": "5 років",
        "chip": "немає",
        "info": "Падре старший. Він дорослий і розумний. Падре живе в підвалі, до якого взимку 2022 чогось бігали люди. Прибігли такі вночі, їсти не дали, щось теревеніли.Чого без паштету приходити, неясно.",
        "images": ['../src/assets/all-cats/padre-main.png', '../src/assets/all-cats/padre-1.png','../src/assets/all-cats/padre-2.png','../src/assets/all-cats/padre-3.png']
    },
    {
      "ID": "Padre",
      "CatsName": "Падре",
      "sex": "кіт",
      "age": "5 років",
      "chip": "немає",
      "info": "Падре старший. Він дорослий і розумний. Падре живе в підвалі, до якого взимку 2022 чогось бігали люди. Прибігли такі вночі, їсти не дали, щось теревеніли.Чого без паштету приходити, неясно.",
      "images": ['../src/assets/all-cats/padre-main.png', '../src/assets/all-cats/padre-1.png','../src/assets/all-cats/padre-2.png','../src/assets/all-cats/padre-3.png']
  },
  {
    "ID": "Padre",
    "CatsName": "Падре",
    "sex": "кіт",
    "age": "5 років",
    "chip": "немає",
    "info": "Падре старший. Він дорослий і розумний. Падре живе в підвалі, до якого взимку 2022 чогось бігали люди. Прибігли такі вночі, їсти не дали, щось теревеніли.Чого без паштету приходити, неясно.",
    "images": ['../src/assets/all-cats/padre-main.png', '../src/assets/all-cats/padre-1.png','../src/assets/all-cats/padre-2.png','../src/assets/all-cats/padre-3.png']
},
     ],
    }),
    actions: {
      goToCatCard(itemid){
        this.router.push({ name: "OneCat", params: { id: itemid } });
      },
    }
})
