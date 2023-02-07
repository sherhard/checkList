let listButton=document.getElementById('listBtn')

let check=document.getElementById('check_list');
let list=document.getElementById('list');

listButton.addEventListener('click',listBut);



function listBut(){
	let task=document.createElement('p');
	task.innerHTML=check.value;
	list.appendChild(task);
	check.value='';

	task.addEventListener('click',del);
	function del(){
		list.removeChild(this)
	}



	
}





