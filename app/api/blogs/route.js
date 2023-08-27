// import { NextRequest } from "next";
import * as fs from 'fs';
import { stringify } from 'querystring';

export async function GET(req, res) {
    try {
        // console.log(req.searchParams)
        let data = await fs.promises.readdir('blogdata')
        console.log(data)
        let allBlogs = []
        for(var i = 0;i<data.length;i++){
            const blogData = await fs.promises.readFile('blogdata/' + data[i]);
            allBlogs.push(JSON.parse(blogData))
        }
        return new Response(JSON.stringify(allBlogs), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'An error occurred.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}


function readFolderAsync(path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readdir(path,(err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
