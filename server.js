
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/say', (req, res) => {
  res.send('Hello World!');
});
