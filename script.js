function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let radius = document.getElementById('radius');
	let r = parseFloat(radius.value);

	if(isNaN(r) || r < 0){
		alert(NaN);
		return;
	}

	let V = (4/3) * Math.PI * Math.pow(r,3);
	let vol = document.getElementById('volume');
	vol.value = V.toFixed(4);
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
