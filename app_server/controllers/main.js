const index = (req, res) => {
    res.render('index', { title: 'Spotify clone' });
   };
   module.exports = {
    index
   };