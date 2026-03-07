const toastList = [].slice.call(document.querySelectorAll('.toast'));
const finalList = toastList.map(function(element) {
    return new bootstrap.Toast(element);
});

finalList.forEach(element => {
    element.show();
})