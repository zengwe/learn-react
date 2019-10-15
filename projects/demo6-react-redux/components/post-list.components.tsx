import React from 'react';
import { connect } from 'react-redux';
import { loadPostsAction } from '../store/actions/post.action';
class PostListComponentsd extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(loadPostsAction)
    }
    render() {
        console.log(this.props);
        const { list } = this.props.post;
        console.log(list);
        let post = list.map((item: any) => {
            return (<li key={item.id}>{item.title}</li>)
        });
        return (
            <div>
                <ul>
                    {post}
                </ul>
            </div>
        ) 
    }
};
const mapStateToProps = (state: any, ownProps: any) => {
    return {
        post: state.post
    }
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {

    }
}
export const PostListComponents = connect(mapStateToProps)(PostListComponentsd);