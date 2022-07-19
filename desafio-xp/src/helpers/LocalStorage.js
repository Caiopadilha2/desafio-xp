export const saveEmailLocalStorage = (value) => {
  localStorage.setItem('userEmail', JSON.stringify(value));
};

export const saveDateLocalStorage = () => {
  localStorage.setItem('acessDate', new Date());
};
