// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);
  
//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }
//     else {        document.documentElement.setAttribute('data-theme', 'light');
//           localStorage.setItem('theme', 'light');
//     }    
// }

// toggleSwitch.addEventListener('change', switchTheme, false);

const themeToggle = document.querySelector("#theme-toggle");
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
}

themeToggle.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
});
