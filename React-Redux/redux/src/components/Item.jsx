function Item ({item, clickHandler}) {
    return (
        <li className='item' onClick={clickHandler}>
            <img width={50} src={item.img} />
            <section>
                <div>{item.name}</div>
                <div>{item.price}원</div>
            </section>
        </li>
    )
}

export default Item