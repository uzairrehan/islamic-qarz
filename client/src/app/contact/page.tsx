import React from 'react'

function Contact() {
  return (
    <>
      <div className='h-16 bg-[#081b33] ' />
      <div className='flex flex-col md:flex-row'>


        <div>
          <h1>Got a Question?</h1>
          <p>We're here to help! Feel free to reach out to us, and we'll get back to you via email.</p>
          <p>Whether you have a question, feedback, or just want to say hello, don't hesitate to contact us!</p>
        </div>

        <div>
          <form action="">
            <label htmlFor="name">
              <h3>Name</h3>
              <input type="text" id='name' />
            </label>
            <label htmlFor="email">
              <h3>Email</h3>
              <input type="email" id='email' />
            </label>
            <label htmlFor="query">
              <h3>Query</h3>
              <input type="text" />
            </label>
            <button type="button"> Send</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default Contact