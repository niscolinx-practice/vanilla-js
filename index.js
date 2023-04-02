function main() {
    const boxComponent = () => {
        const container = document.querySelector('.container')

        const boxes = [
            ['blue', 'red', 'dsfsdf'],
            ['pink', 'green'],
            ['yellow', 'violet'],
            ['purple', 'orange'],
        ]

        function isValidColor(strColor) {
            const s = new Option().style
            s.color = strColor
            return s.color === strColor.toLowerCase()
        }

        boxes.forEach((box, i) => {
            const section = document.createElement('section')
            section.classList.add(`section-${i + 1}`)
            section.id = `section-${i + 1}`

            const div = document.createElement('div')
            div.classList.add('boxes')

            box.forEach((color, idx) => {
                const button = document.createElement('button')
                button.classList.add(`btnf`, `btn-${idx + 1}`)
                button.id = idx
                button.textContent = color

                if (isValidColor(color)) {
                    button.addEventListener(
                        'click',
                        () => (div.style.background = color)
                    )
                
                    div.appendChild(button)
                    console.log(`%cThis is a ${color} text`, `color:${color}`)
                } else {
                    //if the color is not valid, it will not render it
                    console.log(`%c${color} is not a valid color`, `fontWeight:500`)
                }
            })

            section.appendChild(div)
            container.appendChild(section)
        })
    }

    boxComponent()
}

main()
