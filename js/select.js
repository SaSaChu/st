$(function () {
	let items1 = [
		{
			code: 1,
		 	name: "月子餐",
		}, 
		{
		 	code: 2,
		 	name: "生命期營養",
			subItems: [
				{
					code: 0,
					name: "請選擇",
				},
				{
					code: "05010",
					name: "孕前營養",
				},
				{
					code: "05011",
					name: "孕後哺乳營養",
				},
				{
					code: "05012",
					name: "早產兒營養",
				},
				{
					code: "05013",
					name: "新生兒0-1歲營養",
				},
				{
					code: "05014",
					name: "幼兒1-3歲營養",
				},
				{
					code: "05015",
					name: "幼兒4-6歲營養",
				}
			]
		},
		{
			code: 3,
			name: "營養品介紹",
			subItems: [
				{
					code: 0,
					name: "請選擇",
				},
				{
					code: "05070",
					name: "懷孕期營養品",
				},
				{
					code: "05071",
					name: "哺乳期營養品",
				},
				{
					code: "05072",
					name: "早產兒營養品",
				},
				{
					code: "05073",
					name: "新生兒0-1歲營養品",
				},
				{
					code: "05074",
					name: "幼兒1-3歲營養品",
				},
				{
					code: "05075",
					name: "幼兒4-6歲營養品",
				}
			]
		}
	];


	let items2 = [
		{
			code: 1,
		 	name: "孕期大小事",
			 subItems: [
				{
					code: 0,
					name: "請選擇",
				},
				{
					code: "07000",
					name: "孕期三階段",
					thirdItems: [
						{
							code: 0,
							name: "請選擇",
						},
						{
							code: "07001",
							name: "第一孕期(未滿17週)",
						},
						{
							code: "07002",
							name: "第二孕期(17週未滿29週) ",	
						},
						{
							code: "07003",
							name: "第三孕期(29週以上) ",	
						}
					]
				},
				{
					code: "07030",
					name: "孕期檢查與高危險性妊娠篩檢 ",
				},
				{
					code: "07031",
					name: "孕期身體變化",
				},
				{
					code: "07032",
					name: "孕期營養與運動",
				},
				{
					code: "07033",
					name: "孕期生活注意事項",
				},
				{
					code: "07034",
					name: "孕期心理健康",
				},
				{
					code: "07035",
					name: "多胞胎妊娠注意事項"	
				}
			]
		}, 

		{
		 	code: 2,
		 	name: "生產計畫",
			subItems: [
				{
					code: 0,
					name: "請選擇",
				},
				{
					code: "07090",
					name: "生產準備與注意事項",
				},
				{
					code: "07091",
					name: "生產方式",
				},
				{
					code: "07092",
					name: "生產徵兆",
				},
				{
					code: "07093",
					name: "孕婦產前必看!甚麼是拉梅茲呼吸法",
				},
				{
					code: "07094",
					name: "生產球運動",
				},
				{
					code: "07095",
					name: "母嬰早期肌膚接觸",
				}
			]
		},
		{
			code: 3,
			name: "產後照護",
			subItems: [
				{
					code: 0,
					name: "請選擇",
				},
				{
					code: "07096",
					name: "產後身體變化與自我照顧",
				},
				{
					code: "07097",
					name: "產後憂鬱",
				},
				{
					code: "07098",
					name: "親子同室，享受為人母的幸福",
				},
				{
					code: "07180",
					name: "母乳哺育",
					thirdItems: [
						{
							code: 0,
							name: "請選擇",
						},
						{
							code: "07181",
							name: "母乳好處",
						},
						{
							code: "07182",
							name: "成功哺餵方法及技巧",	
						},
						{
							code: "07183",
							name: "如何促進乳汁分泌及問題處理",	
						},
						{
							code: "07184",
							name: "寶寶注意事項",	
						},
						{
							code: "07185",
							name: "媽媽注意事項",	
						},
						{
							code: "07186",
							name: "哺乳注意事項",	
						},	

					]
				},
				
			]
		},
		{
			code: 4,
			name: "新生兒",
			subItems: [
				{
					code: 0,
					name: "請選擇",
				},
				{
					code: "07240",
					name: "新生兒軟綿綿，這樣抱最安全!",
				},
				{
					code: "07241",
					name: "幫新生兒洗澡這樣做就對了！",
				},
				{
					code: "07242",
					name: "新生兒臍帶護理",
				},
				{
					code: "07243",
					name: "寶寶哭鬧如何安撫",
				},
				{
					code: "07244",
					name: "寶寶的睡眠習慣",
				},
				{
					code: "07245",
					name: "營造安全睡眠環境-預防嬰兒猝死症",
				},
				{
					code: "07246",
					name: "觀察寶寶的大便顏色",
				},
				{
					code: "07247",
					name: "用包巾包住寶寶，他才不會「驚到」？",
				},
				{
					code: "07248",
					name: "新生兒篩檢",
				},
				{
					code: "07249",
					name: "新生兒疾病照護",
				},
				{
					code: "07250",
					name: "營養、運動",
				},
				{
					code: "07251",
					name: "生長發育",
				}
			]
		},
		{
			code: 5,
			name: "早產兒",
		},
		{
			code: 6,
			name: "嬰幼兒~兒童",
			subItems: [
				{
					code: 0,
					name: "請選擇",
				},
				{
					code: "07370",
					name: "預防注射",
				},
				{
					code: "07371",
					name: "生活注意事項",
				},
				{
					code: "07372",
					name: "生長發育",
				},
				{
					code: "07373",
					name: "營養、運動",
				},
				{
					code: "07374",
					name: "嬰幼兒疾病照護",
				},
				{
					code: "07375",
					name: "雙(多)胞胎照顧",
				},
				{
					code: "07376",
					name: "口腔保健",
				},
				{
					code: "07377",
					name: "視力保健",
				},
				{
					code: "07378",
					name: "親子共讀",
				},
				{
					code: "07379",
					name: "事故傷害預防",
				}
			]
		}
	];
	
	let items = []
	
	if(window.location.pathname === '/essay-list-2.html') {
		items = items1
	}	

	if(window.location.pathname === '/essay3-list-2.html') {
		items = items2
	}

	const getItem = (code) => {
		if(code) {
		  	return items.find(item => item.code === code)
		} 
		return {}
	}
	  
	const initMainSelect = () => {
		let selectMain = document.getElementById('mainItem-select');	
		let selectSub = document.getElementById('subItem-select');
		let selectThird = document.getElementById('thirdItem-select');

		// 第一層 onchange event
		selectMain.addEventListener('change', loadSubItems, false);
		
		function loadSubItems(event) {
			
			let itemList = getItem(parseInt(event.target.value))

			selectSub.innerHTML = '';
			selectSub.style.display = "none";

			if(selectThird) {
				selectThird.style.display = "none";		
			}
			console.log()
			if(Object.keys(itemList).length > 0) {
				selectSub.dataset.items = event.target.value;

				if(itemList.subItems) {
					for(let item of itemList.subItems) {
						let el = document.createElement("option");
						el.textContent = item.name;
						el.value = item.code;
						selectSub.appendChild(el);
					}
					
					selectSub.style.display = "inline-block";	
				}
			}
		}
		
		
		// 第二層 onchange event
		// 先判斷該頁有沒有第三層，有的話執行叫出第三層選單，沒有的話點擊第二層直接直接跳頁
		if(selectThird) {
			selectSub.addEventListener('change', loadThirdItems, false);
			function loadThirdItems(event) {
				selectThird.innerHTML = '';

				let itemList = getItem(parseInt(event.target.dataset.items))
				let subItems = Object.keys(itemList).length > 0 ? itemList.subItems : [];
				let subItem = subItems.find(item => item.code === event.target.value)
					
				if(subItem.hasOwnProperty('thirdItems')) {	
					for(let item of subItem.thirdItems) {
						let el = document.createElement("option");
						el.textContent = item.name;
						el.value = item.code;
						selectThird.appendChild(el);
					}
					selectThird.style.display = "inline-block";	
				} else {
					redirectUrl(event);	
				}
			}

			selectThird.addEventListener('change', redirectUrl, false);
		} else {
			selectSub.addEventListener('change', redirectUrl, false);	
		}
		

		function redirectUrl(event) {
			if(event.target.value) {
				window.location.replace("/"+event.target.value+".html");
			}
		}
	}
	initMainSelect();
	
});