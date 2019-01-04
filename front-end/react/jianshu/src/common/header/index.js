import React, {Component} from 'react'
import {HeaderWrapper, Logo, Nav, NavItem,NavSearch,Adition, Button} from './style'

class Header extends Component {
    render() {
        return <HeaderWrapper>
            <Logo></Logo>
            <Nav>
                <NavItem className='Left Active'>首页</NavItem>
                <NavItem className='Left'>下载App</NavItem>
                <NavSearch></NavSearch>
                <NavItem className='Right'>登录</NavItem>
                <NavItem className='Right'><i className="iconfont">&#xe636;</i></NavItem>
            </Nav>
            <Adition>
                <Button className="Writing">写文章</Button>
                <Button className="Reg">注册</Button>
            </Adition>
        </HeaderWrapper>
    }
}

export default Header;
