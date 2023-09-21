import Comment from './Comment';

export default function Comments(props) {
    const { comments } = props;
    return (
        <div className="comments">
            {comments.length !== 0 ? (<h2> комментарии </h2>) : (<h2>  </h2>)}
            {
                comments.map((item, index) =>
                    <Comment key={index}
                        title={item.title}
                        body={item.body}
                        isLast={index === 0 ? true : false}
                    />
                )
            }
        </div>
    )

}