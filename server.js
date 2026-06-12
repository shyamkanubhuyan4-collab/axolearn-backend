const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors()); 
app.use(express.json());

app.post('/proxy/search', async (req, res) => {
    try {
        const response = await axios.post('https://www.youtube.com/youtubei/v1/search?prettyPrint=false', req.body, {
            headers: {
                'Content-Type': 'application/json',
                'X-YouTube-Client-Name': '1',
                'X-YouTube-Client-Version': '2.20240101.00.00'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch from YouTube' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
