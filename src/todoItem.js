import React,{Component} from 'react';
//引入proptypes
import PropTypes from 'prop-types';
class TodoItem extends Component {
    // constructor 也是一个生命周期函数，在组件创建的时候被执行，但不是react 专有的
    //是es6的新语法
    constructor(props){
        super(props)
        this.handleDeleteItem=this.handleDeleteItem.bind(this)
    }
    componentWillMount(){
        console.log('componentwillmount=')
    }
    componentDidMount(){
        console.log('componentDidMount=')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps=====')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount====')
    }
    render(h) {
        console.log('render-')
        const {content,test}=this.props;
        return (
            <div>
               <p onClick={this.handleDeleteItem}>{test}---{content}</p>
            </div>
          )

    }
    handleDeleteItem(){
    const {index,deleteself}=this.props;
    deleteself(index)
    }
    
}
//属性格式校验以及默认设置
TodoItem.propTypes={
    test:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number.isRequired,
    deleteself:PropTypes.func 
}
TodoItem.defaultProps={
   test:'fdf'
}
export default TodoItem