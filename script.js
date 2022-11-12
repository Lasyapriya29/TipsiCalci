const b = document.getElementById('billamount')
const t = document.getElementById('tipamount')
const p = document.getElementById('splitval')
const f = document.getElementById('final')

var pn = Number(p.innerHTML)
var rupee = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
});

function billcalc() {
    const bi = Number(b.value)
    if(bi < 0)
    {
        alert("Enter a positive bill amount");
        return
    }
    const ti = Number(t.value)
    if(ti < 0)
    {
        alert("Enter a positive tip percentage");
        return
    }
    const tp = ti / 100
    const ta = bi * tp
    const tot = (bi + ta) / pn
    final.innerText = `${rupee.format(tot)}`
}

function increase() {
    pn += 1
    p.innerHTML = pn
    billcalc()
}
function decrease() {
    if (pn <= 1) {
        return
    }
    pn -= 1
    p.innerHTML = pn
    billcalc()
}
