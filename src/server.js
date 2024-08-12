const express = require('express');
const app = express();
const port = 5000;

// Sample video data
const videos = [
  {
    id: 1,
    title: 'DUNE',
    description: 'A science fiction film based on the novel by Frank Herbert.',
    thumbnail: '/images/trending/dune.jpg',
    url: 'https://www.youtube.com/watch?v=XXXXXXX'
  },
  // Add more video objects here
];

app.get('/api/videos', (req, res) => {
  res.json(videos);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
