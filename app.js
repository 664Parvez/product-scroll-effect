let image = document.getElementById("cream")

window.addEventListener("scroll", () => {
    if (window.scrollY <= 200) {
        image.src = "./image/c1.png"
    }
    else if (window.scrollY <= 870) {
        image.src = "./image/c2.png"
    }
    else if (window.scrollY <= 1600) {
        image.src = "./image/c3.png"
    }
    else {
        image.src = "./image/c4.png"
    }

    if (window.scrollY > 1600) {
        image.style.width = "300px"
        image.style.top = "350px"
    } else {
        image.style.width = "150px"
        image.style.top = "20%"
    }

    if (window.scrollY > 150) {
        image.style.transform = "rotate(0deg)"
    } else if (window.scrollY < 150) {
        image.style.transform = "rotate(-20deg)"
    }
    console.log(window.scrollY)
})