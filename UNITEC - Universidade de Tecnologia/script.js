document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
 
    /*Users e passwords | Direcionamento de cada user para uma página*/
    const users = [
        { username: 'Matheus', password: 'santos123', redirect: 'menu_matheus.html' },
        { username: 'Jose', password: 'robertinho123', redirect: 'menu_junior.html' },
        { username: 'Day', password: 'rodrigues123', redirect: 'menu_day.html' },
        { username: 'Karyna', password: 'rocha123', redirect: 'menu_karyna.html' }
    ];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        window.location.href = user.redirect;
    } else {
        errorMessage.textContent = 'Nome de usuário ou senha inválidos';
        errorMessage.style.display = 'block'; // Exibir mensagem de erro
    }
});