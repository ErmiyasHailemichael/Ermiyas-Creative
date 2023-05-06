import Loader from 'react-loaders'
import './index.scss'

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact me </h1>
          <p>
            I am interested in freelance opportunities. 
            However, if you have other request or question,
            don't hesitate to use the form. 
          </p>
          <div className='contact-form'>
            <form> 
                <ul>
                    <li className='half'>
                        <input type='text' placeholder='Name' required /> 
                    </li>
                    <li className='half'>
                        <input type='text' name='email' placeholder='mail' required /> 
                    </li>
                </ul>
                </form>             
          </div>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Contact

{
  /* type='ThreeDots' */
}
