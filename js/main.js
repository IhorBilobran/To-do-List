$(document).ready(function(){
	let input = $('#input'),
		add = $('#add'),
		output = $('#output'),
		toDoList = [];

	if (localStorage.getItem('todo') != undefined) {
		toDoList = JSON.parse(localStorage.getItem('todo'));
	}	

// по кліку додаю елемент в список і виводжу на екран
	add.click(function(){
		let value = input.val(),
			temp = {},
			i = toDoList.length;		

		// need - {todo: 'Купити хліб', check: false}
		temp.todo = value;
		// при кожному кліку індекс буде мінятись
		toDoList[i] = temp;
		
		//функція додавання мети в DOM
		out();

		localStorage.setItem('todo', JSON.stringify(toDoList));
		// очищення інпута після вводу
		input.val('');
	});


	// removing goal, хак з document дозволяє працювати з створеними
	// через jquery елементами
	$(document).on("click", '.delete', function(){
		$(this).parent().remove();
		let thisElement = $(this).prev().text()

		// при кліку треба щоб з списку видалялась мета
		// пройтись по списку і знайти матч обєкта і кікнути його
		removeFromList(thisElement, toDoList);
		console.log(toDoList)
	});

	function out(){
		let out = '';
		
		for (let key in toDoList) {
			out = toDoList[key].todo;
		}
		let newElement = $('<div class="goal"><p></p><div class="delete"></div></div>');
		newElement.find('p').text(out);
		
		output.append(newElement);

		//console.log(out);
		// output.append()
	}

	function removeFromList(element, list) {
		for (let i = 0; i < list.length; i++) {
			for (let key in list[i]) {
				if( list[i][key] == element) {
					return list.splice(i, 1);
					break;
				}
			}
		}
	}

	/* dont work
	$('.delete').click(function(){
		$(this).parent().remove();
		console.log('clicked to empty')
	});*/
});
