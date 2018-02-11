$(document).ready(function(){
	let input = $('#input'),
		add = $('#add'),
		output = $('#output'),
		toDoList = [];

	add.click(function(){
		let value = input.val(),
			temp = {};

		// need - {todo: 'Купити хліб', check: false}
		temp.todo = value;
		temp.check = false;
		
		let i = toDoList.length;
		
		// при кожному кліку індекс буде мінятись
		toDoList[i] = temp;
		
		console.log(toDoList);
		
		out();
	});

	function out(){
		let out = '';
		
		for (let key in toDoList) {
			out = toDoList[key].todo;
		}
		let newElement = $('<div class="goal"><p></p><div class="delete"></div></div>');
		newElement.find('p').text(out);
		
		output.append(newElement);

		console.log(out);
		// output.append()
	}




	// removing goal, хак з document дозволяє працювати з створеними
	// через jquery елементами
	$(document).on("click", '.delete', function(){
		$(this).parent().remove();
		let thisElement = $(this).prev().text()

		// при кліку треба щоб з списку видалялась мета

		for (let key in toDoList) {
			if (toDoList[key] == thisElement )
			delete toDoList[key]
		}
		console.log(toDoList);

	});

	/* dont work
	$('.delete').click(function(){
		$(this).parent().remove();
		console.log('clicked to empty')
	});*/
});
