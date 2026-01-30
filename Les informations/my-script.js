const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(element => new bootstrap.Popover(element));

const tooltipeTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipeList = [...tooltipeTriggerList].map(element => new bootstrap.Tooltip(element));

const toastTrigger = document.getElementById("my-toast");
const toastContent = document.getElementById("my-toast-content");
const toast = new bootstrap.Toast(toastContent, {delay: 1500, animation: true});
toastTrigger.addEventListener('click', () => {
    toast.show();
});