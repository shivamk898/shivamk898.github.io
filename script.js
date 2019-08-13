        AOS.init();
        const toggle = document.getElementById('toggle');
        toggle.addEventListener('click', function () {
            document.querySelector('#toggle').classList.toggle('active');
            document.querySelector('#overlay').classList.toggle('open');
            document.querySelector('.showcase-projects').classList.toggle('showcase-toggle')
        })
