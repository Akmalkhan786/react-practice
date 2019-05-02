import React from 'react';

const PostItem = (props) => {
    return (
        <div>
            {props.match.params.id} -- {props.match.params.uname}
        </div>
    )
}

export default PostItem;