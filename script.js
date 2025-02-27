setTimeout(() => {
    document.querySelectorAll('.skeleton').forEach(el => el.style.display ="none");
    document.querySelectorAll('.hidden').forEach(el => el.style.display ="block");
}, 5000);