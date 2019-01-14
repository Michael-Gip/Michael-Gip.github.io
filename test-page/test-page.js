/* jshint esversion: 6 */ 
// Зарегистрировать событие click на треугольники
// Создать функцию для появление и изчисновение меню.
//зарегистрировать событие клик на все элементы выпадающего списка.
//Для каждого раздела свой ключ. Всего два.
// при клике на элемент, я получаю значение его data и присваиваю его data основного элемента.
// сохраняю его в локал под ключом phys или net
// удаляю весь блок и ключ из локал

// функция удаления подхода
//зарегистрировать событие клик на иконке удалении
// получить ссылку на весь блок данного подхода
// сделать поиск по всему блоку подхода для элементов с аттрибутом data
// используя forEach пройтись по всей коллекции и пользуясь ключами удалить их из локал
// удалить весь блок подхода
var indexes = {
  phys: 1,
  net: 1
};
(function () {
  const buttons = document.querySelectorAll('[src="images/arrow_drop_down.png"]'),
  drob_down_listItems = document.querySelectorAll('li ul li');
  
  buttons.forEach(function(item, index, collection) {
    item.addEventListener("click", selectApproach);
  });
  drob_down_listItems.forEach(function(item, index, collection) {
    item.addEventListener("click", selectApproach);
  })
}());
// This function for all approaches
function selectApproach(event) {
  const data_value = event.target.getAttribute("data-approach"),
  main_item = event.target.parentElement.parentElement;
  //appear and disapper menu
  if (event.target.nodeName === "IMG") {
    var drop_down_menu = event.target.nextSibling.nextSibling;
    if (drop_down_menu.classList.contains("is-variants")) {
    	drop_down_menu.classList.remove("is-variants");
    } else {
        drop_down_menu.classList.add("is-variants");
    }
  } else {
    main_item.setAttribute("data-approach", data_value);
    localStorage.setItem("phys" + "_" + indexes.phys, data_value);
    indexes.phys++
  }  
}
