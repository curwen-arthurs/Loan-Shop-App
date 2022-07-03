// Creates data rows for the HTML table

// let originalValue = document.querySelector(".value").value;
document.querySelector(".btn-link").addEventListener("click", displayTable);

function displayTable(){
    let originalValue = document.querySelector(".value").value;
    let currentValue = originalValue;
    let placeholder = document.querySelector(".data-output");
    let out = "";
    
    for (i = 0; i < 5; i++) {
        if (i == 0) {
            out += `
            <tr>
                <td>${i + 1}</td>
                <td>${originalValue}</td>
                <td>20%</td>
                <td>${currentValue}</td>
            </tr>
            `;
        }
        else {
            out += `
            <tr>
                <td>${i + 1}</td>
                <td>${originalValue}</td>
                <td>20%</td>
                <td>${currentValue -= currentValue * 0.2}</td>
            </tr>
            `;
        }
    
        placeholder.innerHTML = out;
    }
}
