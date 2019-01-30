let modules = document.querySelectorAll('div.modules label');
let commands = document.querySelectorAll('.accordions article.accordion');

modules.forEach(e => {
    let name = e.querySelector("p.has-text-centered");
    let input = e.querySelector('input');

    input.addEventListener('change', e => {

        // let commands = document.querySelectorAll('.accordions article.accordion.' + name.innerHTML);

        let checkboxes = document.querySelectorAll('div.modules label input:checked');
        let checked = [];

        checkboxes.forEach(e => {
            checked.push(e.labels[0].querySelector('p').innerText);
        });

        commands.forEach(e => {
            e.classList.add('is-hidden');
        });

        commands.forEach(e => {
            for (let i = 0; i < checked.length; i++) {
                if (e.classList.contains(checked[i])) {
                    e.classList.remove('is-hidden');
                }
            }
        });

        if (checked.length <= 0) {
            commands.forEach(e => {
                e.classList.remove('is-hidden');
            });
        }
    })
});