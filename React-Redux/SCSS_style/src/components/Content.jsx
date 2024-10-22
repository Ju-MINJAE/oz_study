const Content = ({content}) => {
    return (
        <section>
            <img src={content.img} />
            <div >
                <div>
                    <img src={content.profile} />
                </div>
                <div>
                    <p>{content.title}</p>
                    <p>{content.creator}</p>
                </div>
            </div>
        </section>
    )
}

export default Content