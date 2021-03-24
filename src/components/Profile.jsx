import './Profile.css'

const Profile = () => {
    return (
        <main className='profile'>
            <div className='profile-header'></div>
            <div className='profile-info'>
                <div className='profile-info-logo'>
                    <img src="https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg" alt="" />
                </div>
                <div className='profile-info-name'>
                    <p>Vladimir P.</p>
                </div>
            </div>
        </main>
    )
}
export default Profile;