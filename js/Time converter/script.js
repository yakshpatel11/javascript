// function to find - seconds = hh, mm, ss
function timeconverter(seconds) {
    let h , m , s;
    m = Math.floor(seconds / 60);
    s = Math.floor(seconds % 60);
    h = Math.floor(m / 60);
    m = Math.floor(m % 60);
    document.writeln(h + " : " + m + " : " + s + " ");

}
timeconverter(80000); 