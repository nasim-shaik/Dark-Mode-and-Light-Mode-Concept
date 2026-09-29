const btn = document.getElementById('mode');

btn.addEventListener("click", () =>{
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')){
        btn.innerHTML = "Light Mode";
    }
    else{
        btn.innerHTML = "Dark Mode";
    }
});
