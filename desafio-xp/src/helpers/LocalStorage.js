export const saveEmailLocalStorage = (value) => {
  localStorage.setItem('userEmail', JSON.stringify(value));
};

export const saveDateLocalStorage = () => {
  localStorage.setItem('acessDate', new Date());
};

export const clearUserLocalStorage = () => {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('acessDate');
};
