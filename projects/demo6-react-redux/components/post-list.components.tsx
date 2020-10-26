import React from 'react';
import { connect } from 'react-redux';
import { loadPostsAction, clearPostList } from '../store/actions/post.action';
class PostListComponentsd extends React.Component<any, any> {
    componentDidMount() {
        this.props.load()
    }
    render() {
        const { list } = this.props.post;
        console.log('this.props',this.props)
        let post = list.map((item: any) => {
            return (<li key={item.id}>{item.title}</li>)
        });
        return (
            <div>
                <div>
                    <button onClick={this.props.clear}>清除</button>
                    <button onClick={this.props.load}>加载</button>
                </div>
                <ul>
                    {post}
                </ul>
            </div>
        ) 
    }
};
const mapStateToProps = (state: any, ownProps: any) => {
    console.log(state, ownProps)
    return {
        post: state.post
    }
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    console.log(ownProps)
    return {
        clear: () => dispatch(clearPostList),
        load: () => dispatch(loadPostsAction)
    }
}
const mergeProps = (...param: any) => {
    return Object.assign({}, ...param);
}
export const PostListComponents = connect(mapStateToProps, mapDispatchToProps, mergeProps)(PostListComponentsd);