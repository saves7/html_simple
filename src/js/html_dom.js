let arr_string_content = document.querySelectorAll('h3');
let text_content = arr_string_content[0].textContent;
/*
console.log(text_content);*/
arr_string_content[1].textContent=`Заголовок средсвами js: ${text_content}`;
