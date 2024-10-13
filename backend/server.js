import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send('Server is ready');
});

// get a List of 4 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id:3,
            title: 'Third joke',
            content: 'This is a third joke'
        },
        {
            id:4,
            title: 'Fourth joke',
            content: 'This is a fourth joke'
        },
        {
            id:5,
            title: 'Fifth joke',
            content: 'This is a fifth joke'
        },
    ];
    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);

}
)