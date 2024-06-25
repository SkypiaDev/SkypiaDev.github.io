document.addEventListener('DOMContentLoaded', () => {
     const sections = document.querySelectorAll('.section');

        sections.forEach(section =>{

            const plusButton = section.querySelector('.plusButton');
            const minusButton = section.querySelector('.minusButton');
            const paragraph = section.querySelector('.paragraph');
    


        plusButton.addEventListener('click', () =>{

            sections.forEach(sec =>{
                sec.querySelector('.paragraph').classList.add('hidden');
                sec.querySelector('.plusButton').classList.remove('hidden');
                sec.querySelector('.minusButton').classList.add('hidden');
            })


            plusButton.classList.add('hidden');
            minusButton.classList.remove('hidden');
            paragraph.classList.remove('hidden');

        })


        minusButton.addEventListener('click', () =>{
            minusButton.classList.add('hidden');
            plusButton.classList.remove('hidden');
            paragraph.classList.add('hidden');

        })

    })

})