// clear local storage btn
let Clear = document.querySelector('.clear');
Clear.addEventListener('click', () => {
    localStorage.removeItem('userData');
  localStorage.removeItem('userLogin');
  alert("Local storage has been cleared!")
  });
  