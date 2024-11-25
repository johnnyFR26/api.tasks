//file with html for main screen

export const mainScreen = () => {
    return `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Prisma API</title>
    </head>
    <body>
        <div id="app">
            <div>
                <h1>Prisma API</h1>
            </div>
            <div></div>
                <a href="/tasks">Tasks</a>
            </div>
            <div>
                <a href="/attachments">Attachments</a>
            </div>
            <div>
                <a href="/users">Users</a>
            </div>
        </div>
    </body>
    </html>
    
    `
}