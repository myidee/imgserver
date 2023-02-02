const express = require('express');
const app = express();
app.use('/', express.static('public'));
const PORT = process.env.PORT || 3000
app.set('view engine', 'pug');

// app.get('/:image', (req, res) => {
//     res.render('imagerender', { image: req.params.image});
// });

// app.get('/', (req, res) => {
//     res.render('imagerender', {image: "img1.jpg"})
// })

app.get('/:image', (req, res) => {
    imageURL = req.params.image + ".jpg"
    res.render('imagerender', {image: imageURL})
})


app.listen(PORT, () => {
    console.log('The application is running on localhost:3000!')
});