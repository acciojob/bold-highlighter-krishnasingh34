let strongTags = document.querySelectorAll('strong')

function highlight() {
    //Write your code here
	for(let t of strongTags){
		t.style.color = 'rgb(0, 128, 0)'
	}
}

function return_normal() {
    //Write your code here
		for(let t of strongTags){
		t.style.color = 'rgb(0, 0, 0)'
	} 
}


