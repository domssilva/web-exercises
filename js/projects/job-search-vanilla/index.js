const form = document.getElementById('search')
const results = document.getElementById('results')
let position = form.querySelector('.title')

/*
company: "Hello Design"
company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdDVYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7389dcbcfe7092331d653cc1f0caa3a5dca2e329/f9c740fb-f104-4833-a38b-d53bdd3930c5"
company_url: "https://www.hellodesign.com"
created_at: "Thu Oct 25 00:41:02 UTC 2018"
description: "<p>Hello is looking for a Full Stack Developer to help us make the future. Build award-winning interactive systems and collaborate with multi-disciplinary teams consisting of strategists, designers, and fellow programmers. We are looking for technologists who are passionate about their craft and have a drive for discovery and innovation.</p>↵<p>Experience</p>↵<ul>↵<li>Can solve a problem in two ways</li>↵<li>Quickly learn new languages and software</li>↵<li>Master of the MVC and MVVC design pattern</li>↵<li>Expert in PHP, Python, and/or Node.js</li>↵<li>Experienced in schemaless databases such as Mongo, Couch, Dynamo</li>↵<li>Can work with multiple content management systems and speak to their strategies, advantages, and disadvantages</li>↵<li>Knowledgeable with caching systems such as Redis, Memcache</li>↵<li>Familiar with AWS products such as EC2, ElastiCache, ECS, CloudFront, SQS, Elastic Transcoder, SNS</li>↵<li>Have a working knowledge of JS Frameworks such as Backbone, Ember or AngularJS</li>↵<li>Comfortable working in a Linux environment</li>↵</ul>↵<p>Attributes</p>↵<ul>↵<li>Detailed and organized</li>↵<li>Excellent communicator, written an verbal</li>↵<li>Able to manage multiple projects simultaneously</li>↵<li>Responsible and capable of meeting tight deadlines</li>↵<li>Enjoy working in a collaborative environment</li>↵<li>Passion for quality design and innovation</li>↵<li>A thirst for learning</li>↵</ul>↵<p>Hello is a creative agency driven to craft worthy experiences. We believe everything will be digital—surrounding us like the air we breathe. Our clients include Facebook, Nike, Tillamook, Sonos, Murad, and Supercell. Our work: hellodesign.com</p>↵<p>We offer competitive salary, 100% employer paid health and dental, 401(k) match, paid vacation, holidays including winter break, gym discounts, fully stocked snack rack, freshly ground coffee, and really cute dogs</p>↵"
how_to_apply: "<p>Please apply using <a href="https://www.linkedin.com/jobs/view/932516853">LinkedIn</a></p>↵<p>Only qualified applicants will be called for an interview. Please no phone calls or office visits.</p>↵"
id: "9bd2d6fa-d7ee-11e8-9f5e-c14b0048f133"
location: "Los Angeles, CA"
title: "Full Stack Developer"
type: "Full Time"
url: "https://jobs.github.com/positions/9bd2d6fa-d7ee-11e8-9f5e-c14b0048f133"
*/

form.addEventListener('submit', event => {
  event.preventDefault()
  position = position.value
  let resultsQtd
  let newDiv

  const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
  const githubJobApi = `https://jobs.github.com/positions.json?description=${position}`
  
  fetch(`${corsAnywhere}${githubJobApi}`)
    .then(res => res.json())
    .then(data => {

      resultsQtd = document.createElement('p')
      resultsQtd.innerText = `${data.length} job postings found.`
      results.appendChild(resultsQtd)

      data.map(job => {
        newDiv = document.createElement('div')
        newDiv.innerHTML = job.title
        results.appendChild(newDiv)
      })
    })
})