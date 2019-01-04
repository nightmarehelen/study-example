import React, {Component} from 'react'
import {CSSTransition} from "react-transition-group"
import {
    HeaderWrapper, SearchInfo, Logo, Nav, NavItem, NavSearch, SearchInfoSwitch,
    Adition, Button, SearchWrapper, SearchInfoTitle, SearchInfoItem, SearchInfoItems
} from './style'
import {connect} from 'react-redux'
import {actionCreator} from './store/'

class Header extends Component {
    constructor(props) {
        super(props)
        this.getListArea = this.getListArea.bind(this);
    }

    getListArea() {
        const {focused, list, page,totalPage,handleMouseEnter,handleMouseLeave,
            mouseEnter,handlePageChange} = this.props;
        const pageList = [];
        const jsList = list.toJS();

        for (let i = page * 10; i < (page + 1) * 10 && i < jsList.length; i++) {
            pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>);
        }
        if (focused || mouseEnter){
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>热门搜索</SearchInfoTitle>
                    <SearchInfoSwitch onClick={()=>{handlePageChange(page, totalPage,this.spinIcon)}}>
                        <i ref={(icon) =>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一换
                    </SearchInfoSwitch>
                    <SearchInfoItems>
                        {pageList}
                    </SearchInfoItems>
                </SearchInfo>);
        }
        return null;
    }

    render() {
        const {focused, handleInputFocus,list} = this.props;
        return <HeaderWrapper>
            <Logo></Logo>
            <Nav>
                <NavItem className='Left Active'>首页</NavItem>
                <NavItem className='Left'>下载App</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={500}
                        in={focused}
                        classNames="slide"
                    >
                        <NavSearch className={focused ? "focused" : ""}
                                   onFocus={() =>{handleInputFocus(list)}} onBlur={() =>{handleInputFocus(list)}}>
                        </NavSearch>
                    </CSSTransition>
                    <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>&#xe62b;</i>
                    {this.getListArea()}
                </SearchWrapper>
                <NavItem className='Right'>登录</NavItem>
                <NavItem className='Right'><i className="iconfont">&#xe636;</i></NavItem>
            </Nav>
            <Adition>
                <Button className="Writing"> <i className='iconfont'>&#xe678;&nbsp;&nbsp;</i>写文章</Button>
                <Button className="Reg">注册</Button>
            </Adition>
        </HeaderWrapper>
    }
}

const mapStateToProps = (state) => {
    return {
        'focused': state.getIn(['header', 'focused']),
        'list': state.getIn(['header', 'list']),
        'page': state.getIn(['header', 'page']),
        'totalPage': state.getIn(['header', 'totalPage']),
        'mouseEnter':state.getIn(['header', 'mouseEnter'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: (list) => {
            console.log(list.size)
            if(list.size === 0)
                dispatch(actionCreator.GetList())
            dispatch(actionCreator.SearchFocus());
        },
        handleMouseEnter: () =>{
            dispatch(actionCreator.MouseEnter());
        },
        handleMouseLeave: () =>{
            dispatch(actionCreator.MouseLeave());
        },
        handlePageChange: (page, totalPage, spinIcon) =>{
            let originAng = spinIcon.style.transform.replace(/[^0-9]/ig,'')
            console.log(originAng);
            if(originAng)
                originAng = parseInt(originAng,10);
            else
                originAng = 0;
            console.log(spinIcon.style.transform );
            spinIcon.style.transform = 'rotate('+(originAng+360)+'deg)';
            page = page + 1;
            if(page >= totalPage)
                page = 0;
            dispatch(actionCreator.ChangePage(page));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
