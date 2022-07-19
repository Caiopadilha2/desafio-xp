const saveEmailLocalStorage = (value) => (
  localStorage.setItem('userEmail', JSON.stringify(value))
);

export default saveEmailLocalStorage;
