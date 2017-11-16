import express from 'express';
import Book from '../model/Book';

const router = express.Router();

router.post('/add', (req, res)=>{
  const newBook = new Book(req.body);
  newBook.save(err=>{
    err ? res.redirect('http://localhost:3000/') : res.redirect('http://localhost:3000/')
  });
});

router.get('/', (req, res)=>{
  Book.find((err, books)=>{
    err ? res.send(err) : res.send(books)
  });
});

router.get('/:id', (req, res)=>{
  Book.findByIdAndRemove(req.params.id, (err)=>{
        err ? res.send(err) : res.redirect('http://localhost:3000')
    });
});

router.post('/update/:id', (req, res)=>{
  Book.findByIdAndUpdate(req.params.id, req.body,(err)=>{
    err ? res.send(err) : res.redirect('http://localhost:3000')
  })
})

export default router;
