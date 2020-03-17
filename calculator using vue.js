Vue.component("num",{
	props: ['item'],
	template: '<span @click="$emit(\'enter\')" :class="item.name">{{item.name}}</span>',
});
var calc = new Vue({
	el: ".calc",
	data: {
		items: [
			{
				id: 0,
				name: "c"
			},
			{
				id: 1,
				name: "/"
			},
			{
				id: 2,
				name: "*"
			},
			{
				id: 3,
				name: "7"
			},
			{
				id: 4,
				name: "8"
			},
			{
				id: 5,
				name: "9"
			},
			{
				id: 6,
				name: "-"
			},
			{
				id: 7,
				name: "4"
			},
			{
				id: 8,
				name: "5"
			},
			{
				id: 9,
				name: "6"
			},
			{
				id: 10,
				name: "+"
			},
			{
				id: 11,
				name: "1"
			},
			{
				id: 12,
				name: "2"
			},
			{
				id: 13,
				name: "3"
			},
			{
				id: 14,
				name: "0"
			},
			{
				id: 15,
				name: "00"
			},
			{
				id: 16,
				name: "."
			},
			{
				id: 17,
				name: "="
			},
		],
		value: "",
	},
	methods: {
		enter: function(index){
			var keyValue = event.target.className;
			if(keyValue.indexOf('c') != -1){
				this.value = "";
			}
			else if(keyValue.indexOf('=') != -1){
				if(this.value.match(/[\+\-\*\/]{2}/))
					alert("你可能不知道，一个有梦想的表达式不允许它的内部出现两个相邻的运算符:-)");
				else
					this.value = eval(this.value);
			}
			else{
				this.value += this.items[index].name;
			}
		}
	}
});
