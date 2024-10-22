import Icon from './Icon'

const tabs = ['전체', '게임', '음악', '뉴스', '라이브', '최근에 업로드된 동영상', '새로운 맞춤 동영상']

const Tab = () => {
    return (
        <section id='tab'>
            <Icon type="arrow-left" />
            <ul>
                {tabs.map((el, idx) => <List key={'tab' + idx} text={el} />)}
            </ul>
            <Icon type="arrow-right" />
        </section>
    )
}

const List = ({text}) => {
    return <li>{text}</li>
}

export default Tab