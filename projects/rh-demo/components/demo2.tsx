import React, { FC, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ICounterAction } from '../store'
import { stat } from 'fs';
export interface IPropsFromParent {
    name: string;
}
export interface IPropsFromRedux {
    count: number;
}
export interface IProps extends IPropsFromParent, IPropsFromRedux,  ReturnType<typeof mapDispatchToProps>{};
/**
 * FC<any> 这个any 确定无法找到合适的定义
 * @param props 
 */
export const Cemo2: FC<IProps> = (props: IProps) => {
    // useState也可以是函数
    let [state, setState] = useState({self: props.count + 1});
    let addSelf = () => {
        // setState(obj) 如果obj地址不变，那么React就认为数据没有变化，不会更新视图
        setState({self: state.self + 1});
        // setState可以是函数
        setState((val) => {
            return {
                self: val.self + 1
            }
        });
    }
    let descSelf = () => {
        setState({self: state.self - 1});
    }
    // 它在第一次渲染之后和每次更新之后都会执行
    useEffect(() => {
        console.log('useEffect()', state);
        return () => {
            console.log('before destroy excute!')
        }
    },[state.self]);
    console.log('render')
    return (
        <>
            <div>
                name: {props.name} <br />
                count: {props.count} <br />
                self: {state.self}
            </div>
            <div>
                <button onClick={props.add}>count加</button>
                <button onClick={props.desc}>count减</button>
                <button onClick={addSelf}>self加</button>
                <button onClick={descSelf}>self减</button> 
            </div>
        </>
    );
}

const mapStateToProps = (state: {count: number}, ownProps: IPropsFromParent) => {
    return {
        count: state.count
    }
};
/**
 * 
 * @param dispatch 
 * @param ownProps 
 * 
 * @UsageNotes
 * 
 * `接口说明`
 * ```typescript
 *  interface ICounterAction { 
 *      type: 'ADD'|'DESC',
        payload: number
 *  }
 * ```
 */
const mapDispatchToProps = (dispatch: Dispatch<ICounterAction>, ownProps: IPropsFromParent) => {
    return {
        add: () => dispatch({type: "ADD", payload: 1}),
        desc: () => dispatch({type: "DESC", payload: 1})
    }
}

export const Demo2 = connect(mapStateToProps, mapDispatchToProps)(Cemo2);
