import React from 'react'
import axios from 'axios'
import './Login.css'
import bk from './images/background.svg'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        isAuthorized: false
      };
    }
    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value});
    }
    onSubmit = (e) => {
      e.preventDefault();
      const { username, password } = this.state;
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
      const tokenuser = React.createContext(token);
      axios.post('http://api.math.silaeder.ru/users/login', {} ,{
                  headers: {
                      "Access-Control-Allow-Origin": "*",
                      "Content-Type": "application/x-www-form-urlencoded",
                      'Authorization': `Basic ${token}`
                  }
      })
      .then((res) => {
          console.log(res);
          this.setState({ username, password, isAuthorized:true });
      });
      let data = [{token:tokenuser._currentValue}]
      if (this.state.isAuthorized === true) {
        this.props.history.push({
          pathname: '/chats',
          state: data
        })
        console.log(data);
      }
    }
    render() {
      const { username, password } = this.state;
      return (
        <div className="login">
          <img src={ bk } className="bk_img"/>
          <div className="field">
            <p className="field__label">MathBattle</p>
            <p className="field__enter_p">Вход</p>
            <form>
              <div className="form__nickname">
                  <input className="form__nickname_p" placeholder="Никнейм" name="username" onChange={this.onChange}/>
              </div>
              <div className="form__password">
                  <input className="form__password_p" placeholder="Пароль" name="password" onChange={this.onChange}/>
              </div>
              <a href="/signup" classname="register_p">Нет аккаунта? <u>Создайте!</u></a>
              <button onClick={this.onSubmit} className="form_submit form_submit_p">Вход</button>
            </form>
          </div>
        </div>
      );
    }
}
export default Login;
