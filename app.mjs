import * as http from "node:http";
import { promises as fsPromises } from "node:fs";
const port = process.env.PORT || 3000;

const app = http.createServer(async (req, res) => {
    if(req.method === "GET"){
        switch(req.url){
            case "/home":
                await pageWriter(res, "./html-pages/index.html", 200);
                return;
            case "/about":
                await pageWriter(res, "./html-pages/about.html", 200);
                return;
            case "/contact":
                await pageWriter(res, "./html-pages/contact.html", 200);
                return;
        }
    } 
    await pageWriter(res);
})

async function pageWriter(
    response,
    fileName = "./html-pages/404.html",
    statusCode = 404,
    contentType = "text/html"
) {
    const pageData = await fsPromises.readFile(fileName);
    response.writeHead(statusCode, {
        "Content-Type": contentType
    });
    response.write(pageData);
    response.end();
}

app.listen(port, () => {
    console.log(`Server is runneng on port ${port}`);
})