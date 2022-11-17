let contenitore = document.querySelector('#stelleDiv')
let active = -1
let controllo = true

for (let i = 0; i < 10; i++) {
    let starImg = document.createElement('img')
    starImg.src ='Assets/star_dark.svg'
    starImg.classList.add('star-style')
    contenitore.appendChild(starImg)

    starImg.addEventListener('mouseover', () =>onStarHover(i))
    starImg.addEventListener('mouseleave', () =>onStarOut())
    starImg.addEventListener('click', () => {
        if(controllo){
            onStarClick(i)
            //controllo = false
        } else{
            offStar()
            controllo = true
        }    
    })
}

let stars = document.querySelectorAll(".star-style")


    function onStarHover(a) {
        fill(a)
    }

    function fill(ratingVall) {
        for (let i = 0; i < 10; i++) {
            if(i <= ratingVall) {
                stars[i].src = "Assets/star.svg"
            }else{
                stars[i].src = 'Assets/star_dark.svg'
            }
        }
    }

    function onStarOut() {
        fill(active)
    }

    function onStarClick(a) {
        if (a == 0 && active == 0) {
            controllo = false
        }
        active = a
        fill(active)
    }

    function offStar() {
        active = - 10
        fill(active)
    }
