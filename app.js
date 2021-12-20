document.addEventListener('DOMContentLoaded', () => {
    const blank =  {
        name: 'blank',
        img: 'https://cdn.pixabay.com/photo/2013/07/13/13/14/swirl-160625_1280.png'
    };
    const cards = [
        {
            name: 'book',
            img: 'https://live.staticflickr.com/65535/50726701386_565f6bc719_b.jpg'
        },
        {
            name: 'experiment',
            img: 'https://cdn-icons-png.flaticon.com/512/1055/1055074.png'
        },
        {
            name: 'book',
            img: 'https://cdn-icons-png.flaticon.com/512/1935/1935021.png'
        },
        {
            name: 'smile',
            img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Packaged_food_clip_art.png'
        },
        {
            name: 'lock',
            img: 'https://png.pngtree.com/png-vector/20210225/ourmid/pngtree-delicious-and-tempting-thai-tom-yum-goong-png-image_2956067.jpg'
        },
        {
            name: 'mouth',
            img: 'https://cdn-icons-png.flaticon.com/512/1471/1471735.png'
        },
        {
            name: 'book',
            img: 'https://live.staticflickr.com/65535/50726701386_565f6bc719_b.jpg'
        },
        {
            name: 'experiment',
            img: 'https://cdn-icons-png.flaticon.com/512/1055/1055074.png'
        },
        {
            name: 'book',
            img: 'https://cdn-icons-png.flaticon.com/512/1935/1935021.png'
        },
        {
            name: 'smile',
            img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Packaged_food_clip_art.png'
        },
        {
            name: 'lock',
            img: 'https://png.pngtree.com/png-vector/20210225/ourmid/pngtree-delicious-and-tempting-thai-tom-yum-goong-png-image_2956067.jpg'
        },
        {
            name: 'mouth',
            img: 'https://cdn-icons-png.flaticon.com/512/1471/1471735.png'
        }
    ];

    let selectedCards = [];
    let matches = 0;
    let attempts = 0;
    const grid = document.querySelector('.grid');

    function createGrid() {
        for(let i=0; i<cards.length; i++) {
            let tile = document.createElement('img');
            tile.setAttribute('src', blank.img);
            tile.setAttribute('data-id', i);
            tile.setAttribute('width', 100);
            tile.setAttribute('height', 100);
            tile.addEventListener('click', clickedGrid);
            grid.appendChild(tile);
        }
    }

    function clickedGrid () {
        let cardId = this.getAttribute('data-id');
        // console.log(cardId);
        this.setAttribute('src', cards[cardId].img);
        // this.removeEventListener('click', clickedGrid);
        selectedCards.push(cardId);
        setTimeout(checkForMatch, 400);
    }

    function closeSelectedCards() {
        const allImgs = document.querySelectorAll('img');
        allImgs[selectedCards[0]].setAttribute('src', blank.img);
        allImgs[selectedCards[1]].setAttribute('src', blank.img);
    }

    function emptySelectedCards() {
        const allImgs = document.querySelectorAll('img');
        allImgs[selectedCards[0]].setAttribute('opacity', 0.2);
        allImgs[selectedCards[0]].removeEventListener('click', clickedGrid);
        allImgs[selectedCards[1]].setAttribute('opacity', 0.2);
        allImgs[selectedCards[1]].removeEventListener('click', clickedGrid);
    }

    function refreshScore() {
        const matchEl = document.getElementById('matches');
        const attemptEl = document.getElementById('attempts');

        matchEl.innerHTML = matches;
        attemptEl.innerHTML = attempts;
        if(matches == 6)
        {
            alert('YOU WIN !!!');
            location.reload();
        }
    }

    function checkForMatch() {
        if(selectedCards.length == 2) {
            const allImgs = document.querySelectorAll('img');
            console.log(selectedCards[0]);
            console.log(selectedCards[1]);
            if(cards[selectedCards[0]].name == cards[selectedCards[1]].name) {
                matches = matches + 1;
                emptySelectedCards();
            } else {
                //close cards
                closeSelectedCards();
            }
            attempts = attempts + 1;
            selectedCards = [];
            refreshScore()
        }
    }

    createGrid();
})
