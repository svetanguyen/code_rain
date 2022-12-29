class DigitalRain {
    constructor(characters) {
        this.characters = characters;
        this.wrapper = document.querySelector('main')
        this.init()
    }

    init() {
        this.getWindowSize()
        this.getLength()

        for (let i = 0; i < this.widthLength; i++) {
            this.generateRandomText(this.heightLength)
        }
    }

    getWindowSize() {
        this.width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    generateRandomText(length) {
        const charactersLength = this.characters.length;
        if (!charactersLength || !characters) return
        const mainWrapper = document.createElement('div')
        mainWrapper.classList.add('line')
        for ( let i = 0; i < length; i++ ) {
            const wrapper = document.createElement('span')
            const letter = characters.charAt(Math.floor(Math.random() * charactersLength))
            wrapper.innerHTML = letter;
            mainWrapper.appendChild(wrapper)
        }
        this.wrapper.appendChild(mainWrapper)

    }

    getLength() {
        this.widthLength = Math.floor(this.width / 23)
        this.heightLength = Math.floor(this.height / 22)
    }

}

const characters = '0123456789アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ'
const generateRain = new DigitalRain(characters)