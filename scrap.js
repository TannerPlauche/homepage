// let http = require('http');
let https = require('https');



exports.handler = async (event, meta, done) => {
    // let localUrl = 'http://12.249.155.18:9000/api/azure_sso';

    return new Promise((resolve, reject) => {

        const data = JSON.stringify({
            todo: 'Buy the milk'
        });

        const options = {
            hostname: '12.249.155.18',
            port: 9000,
            path: '/api/azure_sso',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = https.request(options, (res) => {
            console.log(`statusCode: ${res.statusCode}`);

            res.on('data', (d) => {
                process.stdout.write(d);
            });

            res.on('end', (data) => {
                const response = {
                    statusCode: 200,
                    body: data,
                };
                resolve(response);
            });
        });

        req.on('error', (error) => {
            console.error(error);
        });

        req.write(data);
        req.end();
        // TODO implement
        const response = {
            statusCode: 200,
            body: event,
        };
        resolve(response);
    });
};
