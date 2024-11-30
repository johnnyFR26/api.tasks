export const mainScreen = () => {
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
                <li><a href="/tasks">Tasks</a></li><br>
                <li><a href="/attachments">Attachments</a><br><br></li>
                <li><a href="/users">Users</a><br></li>
            </ul>
        </div>
    </body>
    </html>
    `;
};
