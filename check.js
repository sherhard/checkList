
let check_list=document.getElementById('check_list');
let addBtnList=document.getElementById('listBtn');
let list=document.getElementById('list');


addBtnList.addEventListener('click',addButton);

function addButton(){
	let addList=document.createElement('li');
		addList.innerHTML=check_list.value;
		list.appendChild(addList);
		check_list.value='';

		addList.addEventListener('click',deleteTask);
	function deleteTask(){
		list.removeChild(this)
	}
}




