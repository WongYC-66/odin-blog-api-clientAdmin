export default function CommentCard(props) {
    const comment = props.comment
    const setShowPage = props.setShowPage

    const fmtTime = (timestamp) => {
        return new Date(timestamp).toLocaleString()
    }

    const editButtonClick = (id) => {
        setShowPage(`EditPost,${id}`)
    }

    return (
        <div className="card my-2">
            <div className="card-body">
                <h5 className="card-title fs-6">
                    <span className="fw-bold"> {comment.user.username} </span>
                    <span className="card-subtitle ms-5 mb-2 text-body-secondary fs-6 text-end">{fmtTime(comment.timestamp)}</span>
                </h5>

                <p className="card-text">{comment.text}</p>

                <button type="button" className="btn btn-primary card-link" onClick={() => editButtonClick(comment._id)}>Edit</button>
                <button type="button" className="btn btn-danger card-link">Delete</button>
            </div>
        </div>
    )

}