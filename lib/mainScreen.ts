import { db } from "./db";

export const mainScreen = async () => {
    async function getUsers() {
        return await db.user.findMany(); // Retorna a lista de usuários
    }

    const users = await getUsers(); // Aguarda a resolução da Promise antes de gerar o HTML

    return `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Prisma API</title>
        <style>
            body {
                margin: 0;
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
            }
            .header {
                background-color: #32329f;
                color: #fff;
                padding: 10px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .header h1 {
                margin: 0;
                font-size: 1.5rem;
            }
            .content {
                padding: 20px;
            }
            .menu {
                margin: 20px 0;
                list-style-type: none;
                padding: 0;
            }
            .menu li {
                margin: 10px 0;
            }
            .menu a {
                text-decoration: none;
                color: #007bff;
                font-weight: bold;
                padding: 10px;
                border: 1px solid #007bff;
                border-radius: 5px;
                transition: background-color 0.3s, color 0.3s;
            }
            .menu a:hover {
                background-color: #007bff;
                color: #fff;
            }
            .form {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .form input {
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 1rem;
            }
            .form button {
                padding: 10px;
                background-color: #007bff;
                color: #fff;
                border: none;
                border-radius: 5px;
                font-size: 1rem;
                cursor: pointer;
                transition: background-color 0.3s;
            }
            .form button:hover {
                background-color: #0056b3;
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>Prisma API</h1>
            <div>
                <a href="https://swagger.io" target="_blank" style="color: #fff; text-decoration: none; font-size: 0.9rem;">Swagger Docs</a>
            </div>
        </div>
        <div class="content">
            <ul class="menu">
                <li><a href="/tasks">Tasks</a></li><br><br>
                <li><a href="/attachments">Attachments</a></li><br><br>
                <li>
                    <a href="/users">Users</a><br><br>
                    <ul>
                        ${users
                          .map(
                              (user) => `<li>${user.name} (${user.email})</li>`
                          )
                          .join('')}
                    </ul>
                    <div class="form">
                        <p>Cadastro de usuário</p>
                        <input type="email" placeholder="Email">
                        <input type="text" placeholder="Nome">
                        <button>Salvar</button>
                    </div>
                </li>
            </ul>
        </div>
        <script>
            const emailInput = document.querySelector('input[type="email"]');
            const nameInput = document.querySelector('input[type="text"]');
            const saveButton = document.querySelector('button');

            saveButton.addEventListener('click', () => {
                const email = emailInput.value;
                const name = nameInput.value;

                if (!email || !name) {
                    alert('Por favor, preencha todos os campos!');
                    return;
                }

                fetch('/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, name })
                })
                .then(response => {
                    if (response.ok) {
                        emailInput.value = '';
                        nameInput.value = '';
                        console.table(response.user)
                        alert('Usuário cadastrado com sucesso!');
                    } else {
                        alert('Erro ao cadastrar o usuário.');
                    }
                })
                .catch(error => {
                    console.error('Erro:', error);
                    alert('Erro de conexão ao cadastrar o usuário.');
                });
            });
        </script>
    </body>
    </html>
    `;
};
