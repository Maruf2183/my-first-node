const express = require('express');
const cors =require('cors')
const app = express();

app.use(cors());
app.use(express.json())

const port = process.env.PORT || 5000;


const users = [
    {}
]




app.get('/', (req, res) => {
    res.send("ami jare bashi bhalo kajoler cheye o kalo hoyna je tar tulona eto je nithur bndhu jana chilona go ")
});

app.get('/users', (req, res,) => {
    const search = req.query.search;
    if (search) {
        const searchItem = users.filter(user => user.name.includes(search.toLocaleLowerCase()));
        res.send(searchItem)
    }
    else {
        res.send(users)
    }
});
app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    const user = users[id];
    res.send(user)

})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.json(newUser)
    console.log('backend hitted',newUser);
})
app.listen(port, () => {
    console.log('listening to port', port);
   
})