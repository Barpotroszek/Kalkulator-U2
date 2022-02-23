function to_bin(dec){
    let bin = [];
    do{
        console.log(`${dec} -> ${dec/2} -> ${dec%2}`)
        bin.push(dec%2);
        dec = Math.floor(dec/2);
        if(bin.length >= 10) break;
    }while(dec >0);
    bin.reverse();
    console.log("Lenght: " + bin.length);
    if(bin.length > 10) bin.push("(Skrócone do 10)")
    return bin.join('');
}

window.onload = () => {
    const submit_btn = document.getElementById("submit");
    const decimal = document.getElementById("decimal");
    const wynik = document.getElementById("wynik");
    submit_btn.addEventListener("click", ()=>{
        let left, right;
        var result
        [left, right] = decimal.value.split('.');
        left = parseInt(left); // całości
        right = parseFloat(`0.${right}`); // ułamek
        console.log([left, right]);
        if (left < 0) {
            result = "";
            left = 256+left;
        }
        else result = "0";
        result += to_bin(left);
        wynik.innerText = result;
    })
};
