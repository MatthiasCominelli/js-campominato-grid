var genBtn = document.getElementById("gen-btn");

genBtn.addEventListener("click" ,
    function() {
        let chooseNum = document.getElementById("num").value;
        if (chooseNum < 1 || chooseNum > 100) {
            alert("Inserisci un numero valido");
        } else {
            
            for (let i = 1; i <= chooseNum; i++) {
                document.getElementById("wrapper").innerHTML += `<div class="square"> ${i} </div>`;
            }

            document.getElementById("wrapper").addEventListener("click",
                function (event) {
                    event.target.classList.toggle("clicked");
                    document.getElementById("alert").innerHTML += event.target.innerHTML;
                }
            );
        }

        
    }
);