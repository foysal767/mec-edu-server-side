const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const coursesDetails = require('./data/course-details.json');

app.get('/', (req, res) => {
    res.send('MecEdu API Running')
});
app.get('/all-courses', (req, res) => {
    res.send(courses)
})
app.get('/courses-details', (req, res) => {
    res.send(coursesDetails)
})
app.get('/course-category/:id', (req, res) => {
    const id = req.params.id
    const courseCategory = coursesDetails.find(n => n.category_id === id);
    res.send(courseCategory);
})
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = coursesDetails.find(n => n._id === id);
    res.send(selectedCourse)
})
app.listen(port, () => {
    console.log('MecEdu Server running on port: ', port)
})