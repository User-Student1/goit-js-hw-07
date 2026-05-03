const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const items = category.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${items}`);

})