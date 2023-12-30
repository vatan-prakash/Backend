import express from 'express'
const app=express();

app.get('/', (req, res)=>{
    res.send('Server ready hai');
});
app.get('/jokes',(req,res)=>{
    const jokes=[
        {
          "category": "Programming",
          "joke": "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
          "category": "Dad Joke",
          "joke": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
          "category": "Pun",
          "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
          "category": "Animal",
          "joke": "Why don't oysters donate to charity? Because they are shellfish!"
        },
        {
          "category": "Knock Knock",
          "joke": "Knock, knock. - Who’s there? - Lettuce. - Lettuce who? - Lettuce in, it’s freezing out here!"
        }
      ];
      res.send(jokes);
      
});
const port =process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`serve at http://localhost:${port}`);

}
);