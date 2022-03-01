const d = document,
    ls = localStorage;

//function that handles dark theme and light theme when the use click the moon button.
// the classDark is the responsable to add the dark mode
export default function darkTheme(btn, classDark) {
    const $thmeBtn = d.querySelector(btn),  
    $selectors = d.querySelectorAll('[data-dark]'); //The variable $selector acts on all the tags of the document that have the data attribute (data-dark)

    // used emoji
    let moon = '🌙',
    sun = '🌞';

    //Function that handles the light mode
    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark))
        $thmeBtn.textContent = moon;
        ls.setItem('theme', 'light');
    };

    //Function that handles the dark mode
    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark))
        $thmeBtn.textContent = sun;
        ls.setItem('theme', 'dark')
    };

    //listebner that handles the different topics. If the theme is dark when you click it changes it to light. When the theme is light it changes to dark.
    d.addEventListener('click', e => {
        if (e.target.matches(btn)) {
            console.log($thmeBtn.textContent)
            if ($thmeBtn.textContent === moon) {
                darkMode()
            } else {
                lightMode()
            }
        }
    });

    //keeping the information in the localstorage so that the changes are persistent
    d.addEventListener('DOMContentLoaded', e => {
        //Aqui se pregunta una variable de localstorage.
        if (ls.getItem('theme') === null) ls.setItem('theme', 'light');
        if (ls.getItem('theme') === 'light') lightMode();
        if (ls.getItem('theme') === 'dark') darkMode();
    });
};

  

