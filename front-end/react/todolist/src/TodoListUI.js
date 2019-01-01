import React from "react"
import {Button, Input,List} from "antd";
import "antd/dist/antd.css"

const TodoListUI  = (props)=>{
    return (<div  style={{margin:10}}>
            <div style={{margin:10}}>
                <Input placeholder="Basic Usage"
                       style={{width:300, marginRight:10}}
                       value={props.inputValue}
                       onChange ={props.handleInputChange}
                />
                <Button type="primary"
                        onClick={props.addTodoListClicked}
                >提交</Button>
            </div>
            <div style={{margin:10}}>
                <List
                    size="small"
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item onClick={(index) =>{props.deleteItem(index)}}>{item}</List.Item>)}
                />
            </div>

        </div>)
    }

export default TodoListUI;
