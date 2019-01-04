import styled from "styled-components"
import logoPic from "../../statics/logo.png"

export const HeaderWrapper = styled.div`
  height:56px;
  border-bottom: 1px solid #f0f0f0;
  position:relative;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
  position:absolute;
  height:56px;
  top:0;
  left:0;
  width:100px;
  display:block;
  background:url(${logoPic});
  background-size:contain;
`

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 100%;
    padding-right:70px;
    box-sizing:border-box;
`

export const NavItem = styled.div`
  &.Left{
    float:left;
  }
  &.Right{
    float:right;
    color: #969696
  }
  
  &.Active{
    color: #ea6f5a
  }
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color:#333;
  letter-spacing: 1px;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
  width:160px;
  height: 38px;
  border:none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  margin-top:9px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  font-size: 15px;
  margin-left:20px;
  &::placeholder{
    color: #666
  }
  &.focused{
    width: 240px;
  }
  &.slide-enter{
    transition: all .5s ease-out;
  }
  &.slide-exit{
    transition: all .5s ease-out;
  } 
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit-active{
    width: 160px;
  }
`

export const Adition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
  float:right;
`

export const Button = styled.div`
  line-height: 38px;
  border-radius: 19px;
  margin-top:9px;
  float:right;
  border: 1px solid #ec6149;
  margin-right: 15px;
  padding: 0 20px;
  font-size: 14px;
  &.Reg{
    color:#ec6149;
  }
  
  &.Writing{
    color:#fff;
    background:#ec6149;
  }
`

export const SearchWrapper = styled.div`
  float:left;
  position: relative;
  .zoom{
    position :absolute; 
    right:5px;
    bottom:5px;
    width:30px;
    height:30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    &.focused{
      background: #777;
      color: #fff;
    }
  }
`

export const SearchInfo = styled.div` 
  position:absolute;
  left: 0;
  top:56px;
  width: 240px;
  padding: 0 10px 5px 10px;
  box-shadow: 0 0 8px rgba(0,0,0,.2)
`

export const SearchInfoTitle = styled.div`
  float:left;
  margin-top: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span`
  float:right;
  margin-top: 10px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 13px;
  color: #969696;
  display:block;
  .spin{
    font-size:12px;
    margin-right:2px;
    transition: all .3s ease-in;
    display: block;
    float:left;
    transform-origin: center center;
  };
  cursor: pointer;
  :hover{
    color:black;
  }
`

export const SearchInfoItems = styled.div` 
  clear:both;
  overflow:hidden;
`
export const SearchInfoItem = styled.a` 
  padding:0 5px;
  line-height: 20px;
  font-size:12px;
  border: 1px solid #ddd;
  color: #969696;
  border-radius:3px;
  display: block;
  float:left;
  margin-right:10px;
  margin-bottom: 5px;
  cursor: pointer;
  :hover{
    color:black;
  }
`
