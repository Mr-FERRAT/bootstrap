const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(element => new bootstrap.Popover(element));

const tooltipeTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipeList = [...tooltipeTriggerList].map(element => new bootstrap.Tooltip(element));