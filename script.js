
const operandClick = (n) => {
    const output = document.querySelector(".output");
    const span = document.querySelector("span");
    span.append(n);
    output.appendChild(span)
}
const operatorClick = (op) => {
    const output = document.querySelector(".output");
    const span = document.querySelector("span");
    span.append(` ${op} `);
    output.appendChild(span)
}
const clear = () => {
    // const output = document.querySelector(".output");
    // const span = document.querySelector("span");
    // span.style.display="none"
    console.log(1)
}