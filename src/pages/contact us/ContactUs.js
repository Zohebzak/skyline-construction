import React from 'react'
import style from './ContactUs.module.scss'

function ContactUs() {
    return (
        <>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.202100899853!2d76.7837825139156!3d19.273575486974842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd01950b472bf81%3A0x45078d32af1f9fea!2sSkyline%20CONSTRUCTION!5e0!3m2!1sen!2sin!4v1679171025882!5m2!1sen!2sin" width="100%" height="400"
                style={{ border: "0" }}
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className={style.mainContact1}>
                <div className={style.mainContact1}>
                    <div className={style.mainAddress}>
                        <h3><i>Skyline Construction & Engineers Pvt Ltd</i></h3>
                        <p>  <i class="fa fa-map-marker" style={{ color: 'red', height: '10px', width: '1.5rem',fontSize:'1.5rem' }}>
                        </i> Amin Colony, Amim Colony, Parbhani, Maharashtra 431401</p>
                        <p><i class="fa fa-mobile-phone" style={{ color: 'red', height: '10px', width: '1.5rem',fontSize:'1.5rem' }}></i>+910000000000</p>
                        <p><i class="fa fa-envelope-o" style={{ color: 'red', height: '10px', width: '2.3rem',fontSize:'1.5rem' }}></i>sample@gmail.com</p>
                    </div>
                    <div className={style.form}>
                        <form>
                            <div className={style.inputField}>
                                <input type={'text'} placeholder={'Your name'} className={style.inputBox} />
                                <input type={'email'} placeholder={'Email address'} />
                            </div>
                            <div className={style.inputField}>
                                <input type={'number'} placeholder={'Your Number'} className={style.inputBox} />
                                <input type={'text'} placeholder={'Subject'} />
                            </div>

                            <textarea cols={40} rows={5} placeholder={'Your messege...'} /><br />
                            <button>submit</button>
                        </form>

                    </div>
                </div>

            </div>

        </>
    )
}

export default ContactUs