$(function () {

	let titlesOrder = loadLocalStorage();
	const titles = ['Objective', 'Education', 'Experience', 'Skills', 'Works'];
	let section = $('section').children();

	if (titlesOrder === undefined) {
		titlesOrder = [];
		for (const key in titles) {
			$('#draggable-list').append(`<li class="draggable" draggable="true" data-pkey=${key}>${titles[key]}</li>`);
			titlesOrder.push(key);
		}
	} else {
		for (const key in titles) {
			$('#draggable-list').append(`<li class="draggable" draggable="true" data-pkey=${titlesOrder[key]}>${titles[titlesOrder[key]]}</li>`);
		}
	}
	renderPage();

	//This function add events to each li to make the drag function possible.
	$('#draggable-list li').each(function () {

		this.addEventListener('dragstart', (event) => {
			this.style.opacity = '0.5';
			event.dataTransfer.effectAllowed = 'move';
			dragElement = this;
			event.dataTransfer.setData('text', this.innerHTML);
			event.dataTransfer.setData('pkey', this.dataset.pkey);
		});

		this.addEventListener('dragleave', () => {
			this.classList.remove('over');
		});

		this.addEventListener('dragover', (event) => {
			event.preventDefault();
			this.classList.add('over');
		});

		this.addEventListener('drop', (event) => {
			event.preventDefault();
			dragElement.innerHTML = this.innerHTML;
			dragElement.dataset.pkey = this.dataset.pkey;
			this.innerHTML = event.dataTransfer.getData('text');
			this.dataset.pkey = event.dataTransfer.getData('pkey');
			this.classList.remove('over');
		});

		this.addEventListener('dragend', () => {
			dragElement.style.opacity = '1';
			saveTitlesOrder();
		});
	});

	//To render each element with the selected order.
	function renderPage() {
		$('section').empty();
		for (const key in titlesOrder) {
			$('section').append(section[titlesOrder[key]]);
		}
	}

	function saveTitlesOrder() {
		titlesOrder = [];
		$('#draggable-list').children().each(function () {
			titlesOrder.push(this.dataset.pkey);
		});
		renderPage();
		/* To save the list order in the localStorage */
		localStorage.removeItem("myCV");
		let data = JSON.stringify(titlesOrder);
		window.localStorage.setItem("myCV", data)
	}

	function loadLocalStorage() {
		let data = window.localStorage.getItem("myCV");
		if (data) {
			let titlesOrder = JSON.parse(data);
			return titlesOrder;
		}
	}
});