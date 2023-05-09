$(function () {
	let items = [
		{
			code: 1,
		 	name: "月子餐",
		}, 
		{
		 	code: 2,
		 	name: "生命期營養",
			subItems: [
				{
					code: "05011",
					name: "孕前營養",
				},
				{
					code: "05012",
					name: "孕後哺乳營養",
				},
				{
					code: "05013",
					name: "早產兒營養",
				},
				{
					code: "05014",
					name: "新生兒0-1歲營養",
				},
				{
					code: "05015",
					name: "幼兒1-3歲營養",
				},
				{
					code: "05016",
					name: "幼兒4-6歲營養",
				}
			]
		},
		{
			code: 3,
			name: "營養品介紹",
			subItems: [
				{
					code: "05071",
					name: "懷孕期營養品",
				},
				{
					code: "05072",
					name: "哺乳期營養品",
				},
				{
					code: "05073",
					name: "早產兒營養品",
				},
				{
					code: "05074",
					name: "新生兒0-1歲營養品",
				},
				{
					code: "05075",
					name: "幼兒1-3歲營養品",
				},
				{
					code: "05076",
					name: "幼兒4-6歲營養品",
				}
			]
		}
	  ];
	  
	const getItem = (code) => {
		if(code) {
		  	return items.find(item => item.code === code)
		} 
		return {}
	}
	  
	const initMainSelect = () => {
		let selectMain = document.getElementById('main-select');
		let selectSub = document.getElementById('subItem-select');

		for(let item of items) {
			let el = document.createElement("option");
			el.textContent = item.name;
			el.value = item.code;
			selectMain.appendChild(el);
		}
		
		// onchange event
		selectMain.addEventListener('change', loadSubItems, false);
		
		function loadSubItems(event) {
	
			
			selectSub.innerHTML = '';
			selectSub.style.display = "none";
			let itemList = getItem(parseInt(event.target.value))
			
			if(Object.keys(itemList).length > 0) {
				// selectSub.dataset.subItems = event.target.value;
				for(let item of itemList.subItems) {
					let el = document.createElement("option");
					el.textContent = item.name;
					el.value = item.code;
					selectSub.appendChild(el);
				}
				
				selectSub.style.display = "inline-block";	
			}
			
		
		}

		selectSub.addEventListener('change', redirectUrl, false);
		function redirectUrl(event) {
			console.log(event.target.value);
			window.location.replace("/"+event.target.value+".html");
		}
	}
	initMainSelect();

});