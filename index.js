const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;  // Use environment port or 3000 as fallback

app.use(cors());

app.get('/proxy', (req, res) => {
    const apiKey = req.query.key;
    const apiUrl = `https://api.1-sms.com/api/sms/get?key=${apiKey}`;

    request(apiUrl, { json: true }, (error, response, body) => {
        if (error) {
            return res.status(500).send({ error: 'Something went wrong!' });
        }
        res.send(body);
    });
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});
