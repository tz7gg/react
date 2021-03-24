import s from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={s.aside}>
            <div>
                <a href="">Profile</a>
            </div>
            <div>
                <a href="">Message</a>
            </div>
            <div>
                <a href="">Main content</a>
            </div>
            <div>
                <a href="">Music</a>
            </div>
            <div>
                <a href="">Settings</a>
            </div>
        </aside>
    )
}
export default Aside;