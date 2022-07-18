const saveEmailLocalStorage = (value) => {
  localStorage.setItem('userEmail', JSON.stringify({ Usuário: value }));
};

export default saveEmailLocalStorage;
