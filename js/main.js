$(document).ready(function(){
	let input = $('#input'),
		add = $('#add'),
		output = $('#output'),
		toDoList = [];

	// перебираю localStorage i записую в масив його значення
	for (let key in localStorage) {
		if (key == 'length') {
			break;
		}
		toDoList.push({todo: key})
		out();
	}

	console.log(toDoList)	

	// по кліку додаю елемент в список і виводжу на екран
	add.click(function(){
		let value = input.val(),
			temp = {},
			i = toDoList.length;		

		if (value != '' || value == undefined || value != ' ') {	
			temp.todo = value;
			// при кожному кліку індекс буде мінятись
			toDoList[i] = temp;
			
			//функція додавання мети в DOM
			out();
			localStorage.setItem(value, true);

			input.val('');
		}
	});


	// removing goal, хак з document дозволяє працювати з створеними
	// через jquery елементами
	$(document).on("click", '.delete', function(){
		$(this).parent().remove();
		let thisElement = $(this).prev().text()

		removeFromList(thisElement, toDoList);
		localStorage.removeItem(thisElement);
	});

	function out(){
		let out = '';
		
		for (let key in toDoList) {
			out = toDoList[key].todo;
		}
		let newElement = $('<div class="goal"><p></p><div class="delete"></div></div>');
		newElement.find('p').text(out);
		
		output.append(newElement);
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
	
	function toStorage(value) {
		return	localStorage.setItem(value, true);
	}
});
