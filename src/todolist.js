import React,{Component} from 'react'
// import { constants } from 'crypto';
import TodoItem from './todoItem'
import "./style.css";
import axios from 'axios';
class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:[]
        }
    }
    handleInputChange(e){
        console.log('this====',this)//undefined?
       // this.state.inputValue=e.target.value 不能直接修改state中的值
       //setState
       this.setState({
           inputValue:e.target.value
       })
    }
    handleBtnClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleDelete(index){
     console.log(index)
     const list=[...this.state.list]
     list.splice(index,1)
     this.setState({
         list:list
     })
    }
    componentDidMount(){
        axios.get('/apisss/todolist')
        .then()
    }
    render(h) {
        return (
            <div>
                {/* {zhge
                老夫空格空格空格
                } */}
              <input value={this.state.inputValue}  className="input"
              onChange={this.handleInputChange.bind(this)}//通过bind来改变this的指向
              />
              <button  onClick={this.handleBtnClick.bind(this)}>提交</button>
              <ul>
                  {
                      this.state.list.map(
                          (item,index)=>{
                            return(
                                <TodoItem content={item} index={index} deleteself={this.handleDelete.bind(this)} key={index}/>
                            )  
                          }
                      )
                  }
                 
              </ul>
            </div>
          )

    }
}
export default TodoList