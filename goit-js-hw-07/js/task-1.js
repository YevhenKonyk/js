'use strict';

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const prefs = {
    categoriesList: document.querySelector('#categories'),
};

const printListData = list => {
    const categories = [...list.children];
    const categoriesCount = categories.length;

    console.log( `В списке ${categoriesCount} категории.` );

    categories.forEach( category => {
        const [categoryHeader, subCategories] = category.children;

        console.log( `Категория: ${categoryHeader.textContent} - Количество элементов: ${subCategories.children.length}` );
    });
};

printListData(prefs.categoriesList);


