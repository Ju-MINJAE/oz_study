import Icon from './Icon'

const list = [
    {
        type: 'home',
        text: '홈'
    },
    {
        type: 'shorts',
        text: 'Shorts'
    },
    {
        type: 'subscribe',
        text: '구독'
    },
    {
        type: 'music',
        text: 'Youtube Music'
    },
    {
        type: 'playlist',
        text: '재생목록'
    },
    {
        type: 'saved',
        text: '오프라인 저장'
    },
]

const Nav = () => {
    return (
        <nav>
            <ul>
                {list.map((el,idx) => <NavList key={'navlist' + idx} {...el}/>)}
            </ul>
        </nav>
    )
}

const NavList = ({type, text}) => {
    return (
        <li>
            <Icon type={type}/>
            <div>{text}</div>
        </li>
    )
}

export default Nav