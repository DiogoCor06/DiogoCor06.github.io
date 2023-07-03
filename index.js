var rgb = [255,0,0];
function setForegroundColor(){
    var sum = Math.round(((parseInt(rgb[0])* 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114 )) / 1000);
    return (sum > 128) ? 'black' : 'white';
}