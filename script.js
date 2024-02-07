
const grid = document.querySelector("#grid-container");

for(let i = 0; i < 100; i++) {

    const myElement = document.createElement("div");
    myElement.classList.add("square");

    myElement.innerHTML = i + 1;

    myElement.addEventListener("click", function() {
        
        console.log(this);

        this.classList.toggle("active");
    });

    grid.append(myElement);

}