function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let radius = document.getElementById('radius');
	let r = parseFloat(radius.value);
	let vol = document.getElementById('volume');
	if(isNaN(r) || r < 0){
		vol.value = 'NaN';
		return;
	}

	let V = (4/3) * Math.PI * Math.pow(r,3);
	
	vol.value = V.toFixed(4);
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
