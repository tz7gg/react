import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'

const Profile = () => {
    return (
        <main className={s.main}>
            <div className={s.header}></div>
            <div className={s.info}>
                <div className={s.avatar}>
                    <img src="https://avatarko.ru/img/kartinka/33/igra_Minecraft_32501.jpg" alt="" />
                </div>
                <div className={s.name}>
                    <p>Vladimir P.</p>
                </div>
            </div>
            <MyPosts />
        </main>
    )
}
export default Profile;