const gridContainer = document.querySelector('.grid');
        let useRainbowColors = false;

        function createGrid(rows, cols) {
            gridContainer.innerHTML = '';

            gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

            for (let i = 0; i < rows * cols; i++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.addEventListener('mouseover', changeColor);
                gridContainer.appendChild(square);
            }
        }

        function changeColor(event) {
            if (useRainbowColors) {
                event.target.style.backgroundColor = getRandomColor();
            } else {
                event.target.style.backgroundColor = 'black';
            }
        }

        function setRainbowColors() {
            useRainbowColors = true;
        }

        function setBlackColor() {
            useRainbowColors = false;
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        createGrid(16, 16);