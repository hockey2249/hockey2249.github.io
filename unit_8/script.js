var answer = prompt('Did you enjoy visiting our website?');
if ( answer.toLowerCase() === 'yes'){
  document.write("<p>Thank you</p>")
} else {
  var noanswer = prompt('Please send us ways to improve the website!')
  document.write("<p>Thank you for your feedback, we will work on improving the website to create a better experience for you next time!</p>")
  console.log(noanswer)
                 }
                 
                
