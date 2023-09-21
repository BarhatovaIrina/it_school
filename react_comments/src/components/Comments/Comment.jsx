import './Comments.scss';
export default function Comment(props) {
    const { title, body, isLast } = props;
    return (

        <div className={`comment ${isLast === true ? ' isLast' : ''}`}>
            <h3 className='comment__title'>{title}</h3>
            <p className='comment__body'>{body}</p>
        </div>

    )
}