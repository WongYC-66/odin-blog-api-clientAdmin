export default function BlogPreviewCard(props) {
    const post = props.post
    const setShowPage = props.setShowPage

    const fmtTime = (timestamp) => {
        return new Date(timestamp).toLocaleString()
    }

    const editButtonClick = (id) => {
        setShowPage(`EditPost,${id}`)
    }

    return (
        <div className="card my-4">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{fmtTime(post.timestamp)}</h6>

                <p className="card-text text-truncate">{post.contents}</p>

                <button type="button" className="btn btn-primary card-link" onClick={() => editButtonClick(post._id)}>Edit</button>
                <button type="button" className="btn btn-danger card-link">Delete</button>
            </div>
        </div>
    )

}