// console.log("hello world!");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Css template</title>
      <style>
          .container{
              display: grid;
              grid-gap: 12px;
              grid-template-areas:
              'navbar navbar navbar navbar'
              'section section section aside'
              'footer footer footer footer' 
          }
          .box{
              background-color: rgb(43, 226, 171);
              border:2px solid black;
              padding:15px;
          }
          #navbar{
              grid-area: navbar;
          }
          #section{
              grid-area: section;
          }
          #aside{
              grid-area: aside;
          }
          footer{
              grid-area: footer;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div id="navbar" class="box">
                  Home About Contact Us Services
          </div>
          <div class="box" id="section">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut inventore nulla harum obcaecati consequatur sed eligendi laborum, voluptatibus omnis officia ipsa iure quia eius, in sunt eos eveniet non! Dolores veniam voluptatum cumque corrupti doloremque numquam unde, ipsum praesentium eaque non laudantium doloribus vero!
          </div>
          <div class="box" id="aside">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus maxime perferendis quasi saepe? Aliquid quod doloremque at quidem beatae reiciendis totam sunt illo ut labore deserunt ex iste enim, blanditiis eum impedit. Impedit, tempore.
          </div>
          <footer class="box">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem non dolor?
          </footer>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});