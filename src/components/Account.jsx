import React from 'react'
import '../css/account.css'


const fotoEliezer = `${process.env.PUBLIC_URL}/assets/FotoDeEliezer.jpg`
const addUserImg = `${process.env.PUBLIC_URL}/assets/add-user.png`

const Account = () => {
    return (
        <div className='account-container'>
            <div className='account-container_1'>
                <section className='account-container_profile grid'>
                    <img className='account-container_img' src={fotoEliezer} alt="" />
                    <h3 className='account-container_tilte'>Eliezer Chirino</h3>
                    <p className='account-container_email'>email@example.com</p>
                    <button className='account-container_button' >
                        Manage Your Google Account
                    </button>
                </section>
            </div>
            
            <section className='account-container_add'>
                <img className='account-container_add_img' src={addUserImg} alt="" />
                <p>Add Another Account</p>
            </section>
            <section className='account-container_signout'>
                <button className='account-container_signout_button'>
                    Sign Out
                </button>
            </section>
            <section className='account-container_terms'>
                <p>Privacy Policy</p>
                <span> • </span>
                <p>Terms of Service</p>
            </section>
        </div>
    )
}

export { Account }