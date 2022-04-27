import React from 'react'
import Button from './Button'
import './Aboutme.css'

function Aboutme()
{
    return(
        <main className='aboutme'>
            <div className='aboutme-container'>
                <div className='image-wrapper'>
                    <div className='image-border'>
                        <image className='image'>
                        </image>
                    </div>
                </div>
                <div className='description-wrapper'>
                    <div className='description-aboutme'>
                        <h1>About me</h1>
                        <p>I'm Mohadese gharakhanlo<br/>
                         I study computer engineering in college <br/>
                         and i am a front-end developer working with React JS<br/>
                        I have also done design projects with Photoshop</p>
                        <div className='button-wrapper'>
                            <Button style='btn-primary' size='btn-medium'>about me</Button>
                            <Button style='btn-outline' size='btn-large'>about me</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Aboutme