'use strict';

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов 
// используй document.createElement()

const refs = {
    ingredientsList: document.querySelector('#ingredients')
};

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const fillListWithItems = (listItems, list) => {
    const listData =  listItems.reduce( ( items, item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        items.push(listItem.outerHTML);

        // console.log(items);
        return items;
    }, [] );

    list.insertAdjacentHTML('afterbegin', listData);
};

fillListWithItems(ingredients, refs.ingredientsList);