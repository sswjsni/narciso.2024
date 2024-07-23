document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".my-form");
    const signupForm = document.getElementById("signup-form");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const user = JSON.parse(localStorage.getItem(email));

            if (user && user.password === password) {
                console.log('Login successful');
                // Redirecionar para a página principal após o login bem-sucedido
                window.location.href = "introdução.html";
            } else {
                alert('Email ou senha incorretos');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            if (localStorage.getItem(email)) {
                alert('Usuário já cadastrado');
            } else {
                const user = {
                    email: email,
                    password: password
                };

                localStorage.setItem(email, JSON.stringify(user));
                alert('Cadastro realizado com sucesso! Faça login com suas credenciais.');
                window.location.href = "index (1).html";
            }
        });
    }
});
