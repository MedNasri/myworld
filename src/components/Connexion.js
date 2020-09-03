import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

class Connexion extends Component {

    state = {
        pseudo: '',
        goToMyApp: false
    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    goToMyApp = event => {
        event.preventDefault()
        this.setState({ goToMyApp: true })
    }

    render() {
        if (this.state.goToMyApp) 
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    
        return (
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.goToMyApp}>
                    <h1>Welcome To My World </h1>

                    <Input
                        type='text'
                        value={this.state.pseudo}
                        onChange={this.handleChange}
                        placeholder='pseudo'
                        pattern='[A-Za-z-]{1,}'
                        size='large'
                        required
                        prefix={<UserOutlined />} />

                    <Button type='primary' htmlType='submit'>Go</Button>
                    <p>Pas de caractères spéciaux.</p>
                </form>
            </div>
        );
    }
}

export default Connexion;