import { NextRequest , NextResponse } from "next/server";
import * as fs from 'fs';
// import {usePathname} from 'next/navigation'
export async function GET(req, res) {
    const body = req.nextUrl;
    const slug = body.searchParams.get('slug')
    console.log(slug)
    try {
        const data = await readFileAsync(`blogdata/${slug}.json`, 'utf-8');
        const responseData = JSON.parse(data);

        return new Response(JSON.stringify(responseData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'No such blog found' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

function readFileAsync(path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
