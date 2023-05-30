import React from 'react'
import './Career.css'

function Career() {
    return (
        <>
            <div className='career-main'>
                <div className='career-text'>
                    <h4>"Constructing Dreams: Explore Exciting Career Opportunities with Us"</h4>
                    <p>
                        "At our construction company, we believe in nurturing talent and providing a platform for growth. Join our team of dedicated professionals, where you can unleash your potential, contribute to exciting projects, and build a rewarding career in the dynamic world of construction. Whether you're an experienced industry veteran or just starting your journey, we offer diverse opportunities and a supportive environment for you to thrive."</p>
                </div>
                <div className='career-form'>
                    <form>
                        <div className='career-input-field'>
                            <div>
                                <label>First-Name</label>
                                <input type='text' placeholder='First-Name' />
                            </div>
                            <div>
                                <label>Last-Name</label>
                                <input type='text' placeholder='Last-Name' />
                            </div>

                        </div>
                        <div className='career-input-field'>
                            <div>
                                <label>Qulification</label>
                                <input type='text' placeholder='Qulification' />
                            </div>
                            <div>
                                <label>Date Of Birth</label>
                                <input type='date' placeholder='Date Of Birth' />
                            </div>

                        </div>
                        <div className='career-input-field'>
                            <div>
                                <label>Applying For</label>
                                <input type='text' placeholder='Applying For' />
                            </div>
                            <div>
                                <label>Total years of experience</label>
                                <input type='text' placeholder='Total years of experience' />
                            </div>

                        </div>
                        <div className='career-input-field'>
                            <div>
                                <label>Conatct No</label>
                                <input type='number' placeholder='Conatct No' />
                            </div>


                        </div>
                        
                            <div>
                                <label>Currrent Orginaization</label>
                                <input type='text' placeholder='Currrent Orginaization' />
                            </div>
                            <div>
                                <label>Current profile</label><br/>
                                <input type='text' placeholder='Current profile' />
                            </div>

                       
                        
                            <div>
                                <label>Last Drawn Salary</label><br/>
                                <input type='text' placeholder='Last Drawn Salary' />
                            </div>
                            <div>
                                <label>Expected Salary</label><br/>
                                <input type='text' placeholder='Expected Salary' />
                            </div>

                      
                        
                            <div>
                                <label>Upload Resume</label><br/>
                                <input type='file' placeholder='Upload Resume' />
                            </div>

                        <div className='btn-div'>
                            <button>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Career
