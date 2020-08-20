function insert(num) {
    document.form.output.value = document.form.output.value + num;
}
function clear(){
   document.form.output.value=undefine;
 }
function result() {
    document.form.output.value = eval(document.form.output.value);
}
function backspace() {
    br = document.form.output.value;
    document.form.output.value = br.substring(0, br.length - 1);
}
function double() {
    document.form.output.value += 0;
    document.form.output.value += 0;
}