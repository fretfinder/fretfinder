
let count = document.querySelector(`#count`);
let left = document.querySelector(`#left`);
let right = document.querySelector(`#right`);
let num = 1;
let fb = false;
let gb = false;
let eb = false;
let al = true;
let container = document.querySelector(`.container2`);
let fender = document.querySelector(`#Check1`);
let forms = document.querySelector(`#formlist`)
let esp = document.querySelector(`#Check3`);
let all = document.querySelector(`#Check4`);
let gibson = document.querySelector(`#Check2`);
let navigate = document.querySelector(`.navigate`)
let input = document.querySelector(`#inputautocmplt`);

//Выполнение функции указанной ниже
window.onscroll = function(){
  scroll();
};
//Функция которая показывает или прячет "header" в зависимости от того до куда пролистал пользователь
function scroll(){
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125){
    document.querySelector(`#header`).style.top = "0px";
  } else{
    document.querySelector(`#header`).style.top = "-360px";
  }
};
let guitars = [
  `FENDER VST SERIES`,
  `FENDER VLP SERIES`,
  `FENDER KC JAGUAR`,
  `ESP KH-1 SPARKLE OUIJA`,
  `ESP KH-2 SPARKLE OUIJA`,
  `FENDER JP TELECASTER`,
  `GIBSON FLYING V`,
  `GIBSON CHERRY LES PAUL`,
  `GIBSON SG DOUBLE-NECK`,
  `ESP PURPLE BLAST`,
  `GIBSON EXPLORER`,
  `FENDER SQ HELLO KITTY`,
];
//Сортирует данные из массива по возрастанию
let sortedguitars = guitars.sort();
//Функция срабатывает если пользователь начал вводить символы
input.addEventListener(`keyup`, function(){
  //Удаляет все элементы из списка (Если запрос перестанет соответствовать условию)
  removeElements();
  for (let i of sortedguitars) {
    //Функция пробегает по всем значениям сортированного массива
    //Делает все буквы ввода маленькими и сравнивает со значениеми из массива 
    if (
      i.toLowerCase().includes(input.value.toLowerCase()) &&
      input.value != `` && input.value != ` `
    ) {
      //Создается элемент-список
      let listItem = document.createElement(`li`);
      //Добавляется к элементу уже готовый в CSS класс и при наведении меняю курсос
      listItem.classList.add(`list-items`);
      listItem.style.cursor = `pointer`; 
      //Меняет стиль у подходящих с вводом букв
      word = i.replace(input.value.toUpperCase(), `<b>${input.value.toUpperCase()}</b>`);
      listItem.innerHTML = word;
      //Выводит все подходящие названия на сайт
      document.querySelector(".list").appendChild(listItem);
      listItem.addEventListener(`click`, function(){
        if (i == `FENDER VST SERIES`){
          window.location.replace("vintage.html");
        }
        else if (i == `FENDER VLP SERIES`){
          window.location.replace("V120.html");
        }
        else if (i == `FENDER KC JAGUAR`){
          window.location.replace("KC.html");
        }
        else if (i == `ESP KH-1 SPARKLE OUIJA`){
          window.location.replace("prpl.html");
        }
        else if (i == `ESP KH-2 SPARKLE OUIJA`){
          window.location.replace("redouija.html");
        }
        else if (i == `FENDER JP TELECASTER`){
          window.location.replace("JP.html");
        }
        else if (i == `GIBSON FLYING V`){
          window.location.replace("V.html");
        }
        else if (i == `GIBSON CHERRY LES PAUL`){
          window.location.replace("lespaul.html");
        }
        else if (i == `GIBSON SG DOUBLE-NECK`){
          window.location.replace("SG.html");
        }
        else if (i == `ESP PURPLE BLAST`){
          window.location.replace("blast.html");
        }
        else if (i == `GIBSON EXPLORER`){
          window.location.replace("explorer.html");
        }
        else if (i == `FENDER SQ HELLO KITTY`){
          window.location.replace("hellokitty.html");
        }  
      })


      //Функция, отправляющая пользователя на страницу гитары, если тот нажмет ENTER когда в списке осталось всего одно значение
      input.addEventListener(`keypress`, function(event)
        {
        if (event.key == `Enter` && document.querySelector(".list").childElementCount == 1){
            if (i == `FENDER VST SERIES`){
              window.location.replace("vintage.html");
            }
            else if (i == `FENDER VLP SERIES`){
              window.location.replace("V120.html");
            }
            else if (i == `FENDER KC JAGUAR`){
              window.location.replace("KC.html");
            }
            else if (i == `ESP KH-1 SPARKLE OUIJA`){
              window.location.replace("prpl.html");
            }
            else if (i == `ESP KH-2 SPARKLE OUIJA`){
              window.location.replace("redouija.html");
            }
            else if (i == `FENDER JP TELECASTER`){
              window.location.replace("JP.html");
            }
            else if (i == `GIBSON FLYING V`){
              window.location.replace("V.html");
            }
            else if (i == `GIBSON CHERRY LES PAUL`){
              window.location.replace("lespaul.html");
            }
            else if (i == `GIBSON SG DOUBLE-NECK`){
              window.location.replace("SG.html");
            }
            else if (i == `ESP PURPLE BLAST`){
              window.location.replace("blast.html");
            }
            else if (i == `GIBSON EXPLORER`){
              window.location.replace("explorer.html");
            }
            else if (i == `FENDER SQ HELLO KITTY`){
              window.location.replace("hellokitty.html");
            }         
        }
      }
)}
  }
});
function removeElements() {
  //Очищает все из списка на сайте
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}







function selectOnlyThis(id) {
  for (var i = 1;i <= 4; i++)
  {
      document.getElementById(`Check` + i).checked = false;
  }
  document.getElementById(id).checked = true;
}


fender.addEventListener(`click`, function(){
  num = 1;
  count.innerHTML = num;
  container.innerHTML = `             <div class="row">
                                      <div class="col-4">
                                        <a href = "Vintage.html"><div class="card"><img src = "img/image.png" style = "width: 100%; height: 600px"><div class = "card-text">FENDER VST SERIES</div></div></a>
                                        <a href = "JP.html"><div class="card"><img src = "img/page.jfif" style = "width: 90%; height: 600px; margin: 0 auto; padding-top:10px;"><div class = "card-text">FENDER JP TELECASTER</div></div></a>
                                      </div>
                                      <div class="col-4">
                                        <a href = "V120.html"><div class="card"><img src = "img/vintagepaul.png" style = "width: 100%; height: 600px"><div class = "card-text">FENDER VLP SERIES</div></div></a>
                                        <a href = "hellokitty.html"><div class="card"><img src = "img/kitty.png" style = "width: 90%; height: 600px;margin: 0 auto; padding-top:15px;"><div class = "card-text">FENDER SQ HELLO KITTY</div></div></a>

                                      </div>
                                      <div class="col-4">
                                        <a href = "KC.html"><div class="card"><img src = "img/jaguar.png" style = "width: 90%; height: 600px; margin: 0 auto; padding-top:10px;"><div class = "card-text">FENDER KC JAGUAR</div></div></a>
        `
})
gibson.addEventListener(`click`, function(){
  num = 1;
  count.innerHTML = num;
  container.innerHTML = `             <div class="row">
                                      <div class="col-4">
                                      <a href = "V.html"><div class="card"><img src = "img/v.png" style = "width: 100%; height: 600px; padding-top:0px;"><div class = "card-text">GIBSON FLYING V</div></div></a>

                                      <a href = "explorer.html"><div class="card"><img src = "img/explorer.png" style = "width: 100%; height: 600px"><div class = "card-text">GIBSON EXPLORER</div></div></a>

                                      </div>
                                      <div class="col-4">
                                      <a href = "lespaul.html"><div class="card"><img src = "img/gibson.png" style = "width: 100%; height: 600px"><div class = "card-text">GIBSON CHERRY LES PAUL</div></div></a>
                                      </div>
                                      <div class="col-4">
                                      <a href = "SG.html"><div class="card"><img src = "img/sg.png" style = "width: 100%; height: 600px;"><div class = "card-text">GIBSON SG DOUBLE-NECK</div></div></a>
                                      </div>
        `
})
esp.addEventListener(`click`, function(){
  num = 1;
  count.innerHTML = num;
  container.innerHTML = `             <div class="row">
                                      <div class="col-4">
                                      <a href = "prpl.html"><div class="card"><img src = "img/ouijagtr.png" style = "margin: 0 auto; width: 95%; height: 600px"><div class = "card-text">ESP KH-1 SPARKLE OUIJA</div></div></a>
                                      </div>
                                      <div class="col-4">
                                      <a href = "redouija.html"><div class="card"><img src = "img/original (1).png" style = "width: 100%; height: 600px"><div class = "card-text">ESP KH-2 SPARKLE OUIJA</div></div></a>
                                      </div>
                                      <div class="col-4">
                                      <a href = "blast.html"><div class="card"><img src = "img/blast.png" style = "padding-top: 10px;width: 100%; height: 600px"><div class = "card-text">ESP PURPLE BLAST</div></div></a>

        `
})
all.addEventListener(`click`, function(){
  num = 1;
  count.innerHTML = num;
  container.innerHTML = `                         <div class="row">
  <div class="col-4">
    <a href = "Vintage.html"><div class="card"><img src = "img/image.png" style = "margin:0 auto;width: 100%;height: 600px"><div class = "card-text">FENDER VST SERIES</div></div></a>
    <a href = "prpl.html"><div class="card"><img src = "img/ouijagtr.png" style = "margin: 0 auto; width: 95%; height: 600px"><div class = "card-text">ESP KH-1 SPARKLE OUIJA</div></div></a>
  </div>
  <div class="col-4">
    <a href = "V120.html"><div class="card"><img src = "img/vintagepaul.png" style = "width: 100%; height: 600px"><div class = "card-text">FENDER VLP SERIES</div></div></a>
    <a href = "redouija.html"><div class="card"><img src = "img/original (1).png" style = "width: 100%; height: 600px"><div class = "card-text">ESP KH-2 SPARKLE OUIJA</div></div></a>
  </div>
  <div class="col-4">
    <a href = "KC.html"><div class="card"><img src = "img/jaguar.png" style = "width: 90%; height: 600px; margin: 0 auto; padding-top:10px;"><div class = "card-text">FENDER KC JAGUAR</div></div></a>
    <a href = "JP.html"><div class="card"><img src = "img/page.jfif" style = "width: 90%; height: 600px; margin: 0 auto; padding-top:10px;"><div class = "card-text">FENDER JP TELECASTER</div></div></a>
  </div>
</div>
        `
})
right.addEventListener(`click`, function(){
  if (all.checked == true){
        if (num < 2){
        num = num + 1;
        count.innerHTML = num;
        }
        if (num == 2){
            container.innerHTML = `<div class="row">
            <div class="col-4">
                    <a href = "V.html"><div class="card"><img src = "img/v.png" style = "width: 100%; height: 600px; padding-top:0px;"><div class = "card-text">GIBSON FLYING V</div></div></a>
                    <a href = "blast.html"><div class="card"><img src = "img/blast.png" style = "padding-top: 10px;width: 100%; height: 600px"><div class = "card-text">ESP PURPLE BLAST</div></div></a>
            </div>
            <div class="col-4">
            <a href = "lespaul.html"><div class="card"><img src = "img/gibson.png" style = "width: 100%; height: 600px"><div class = "card-text">GIBSON CHERRY LES PAUL</div></div></a>
            <a href = "explorer.html"><div class="card"><img src = "img/explorer.png" style = "width: 100%; height: 600px"><div class = "card-text">GIBSON EXPLORER</div></div></a>
            </div>
            <div class="col-4">
            <a href = "SG.html"><div class="card"><img src = "img/sg.png" style = "width: 100%; height: 600px;"><div class = "card-text">GIBSON SG DOUBLE-NECK</div></div></a>
            <a href = "hellokitty.html"><div class="card"><img src = "img/kitty.png" style = "width: 90%; height: 600px;margin: 0 auto; padding-top:15px;"><div class = "card-text">FENDER SQ HELLO KITTY</div></div></a>
                    
            </div>
            </div>
        `
        }
        }
      }
)
left.addEventListener(`click`, function(){
  if (all.checked == true){
    if (num > 1){
        num = num - 1;
        count.innerHTML = num;
    }
    if (num == 1){
        container.innerHTML = `             <div class="row">
        <div class="col-4">
          <a href = "Vintage.html"><div class="card"><img src = "img/image.png" style = "margin:0 auto;width: 100%; height: 600px"><div class = "card-text">FENDER VST SERIES</div></div></a>
          <a href = "prpl.html"><div class="card"><img src = "img/ouijagtr.png" style = "margin: 0 auto; width: 95%; height: 600px"><div class = "card-text">ESP KH-1 SPARKLE OUIJA</div></div></a>
        </div>
        <div class="col-4">
          <a href = "V120.html"><div class="card"><img src = "img/vintagepaul.png" style = "width: 100%; height: 600px"><div class = "card-text">FENDER VLP SERIES</div></div></a>
          <a href = "redouija.html"><div class="card"><img src = "img/original (1).png" style = "width: 100%; height: 600px"><div class = "card-text">ESP KH-2 SPARKLE OUIJA</div></div></a>
        </div>
        <div class="col-4">
          <a href = "KC.html"><div class="card"><img src = "img/jaguar.png" style = "width: 90%; height: 600px; margin: 0 auto; padding-top:10px;"><div class = "card-text">FENDER KC JAGUAR</div></div></a>
          <a href = "JP.html"><div class="card"><img src = "img/page.jfif" style = "width: 90%; height: 600px; margin: 0 auto; padding-top:10px;"><div class = "card-text">FENDER JP TELECASTER</div></div></a>
        </div>
      </div>
    `
    }}
})

