//print 10 to 1 using while loop.
parseInt(prompt("Enter a number"));
let i = 10;
while (i >= 1) {
    {
        document.writeln(i);
        i--;
    }
}
//print only even numbers from 10 to 1.
parseInt(prompt("Enter a number"));
let j = 10;
while (j >= 1) {
    if (j % 2 == 0) {
        document.writeln(j);
        j--;

    }
}
// print number from n1 to n2.
parseInt(prompt("Enter n1"));
parseInt(prompt("Enter n2"));
let n1 = 1;
let n2 = 10;
let k = n1;
while (k <= n2) {
    document.writeln(k);
    k++;
}
// print leap years from startyear to endyear.
parseInt(prompt("Enter start year"));
parseInt(prompt("Enter end year"));
let startyear = 2000;
let endyear = 2020;
let year = startyear;
while (year <= endyear) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        document.writeln(year);
        year++;


    }
}